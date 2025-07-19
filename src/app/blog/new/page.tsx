'use client';

import { useEffect, useRef, useState } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import axios from 'axios';
import TurndownService from 'turndown';
import {
  FaBold, FaItalic, FaUnderline, FaHeading, FaListUl, FaListOl,
  FaQuoteRight, FaMinus, FaAlignLeft, FaAlignCenter, FaAlignRight,
  FaImage, FaSave
} from 'react-icons/fa';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Heading from '@tiptap/extension-heading';
import Blockquote from '@tiptap/extension-blockquote';
import { FontSize } from '@/lib/extensions/FontSize'; // Adjust path if needed


export default function BlogEditorPage() {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tag, setTag] = useState('');
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const turndownService = new TurndownService();

  turndownService.addRule('underlineToComponent', {
    filter: (node) => node.nodeName === 'U',
    replacement: (content) => `<Underline>${content}</Underline>`
  });

  turndownService.addRule('colorToComponent', {
    filter: (node) =>
      node.nodeName === 'SPAN' && (node as HTMLElement).style.color !== '',
    replacement: (content, node) => {
      const color = (node as HTMLElement).style.color;
      return `<Color color="${color}">${content}</Color>`;
    },
  });

  turndownService.addRule('fontSizeToComponent', {
    filter: (node) =>
      node.nodeName === 'SPAN' && (node as HTMLElement).style.fontSize !== '',
    replacement: (content, node) => {
      const fontSize = (node as HTMLElement).style.fontSize;
      return `<FontSize size="${fontSize}">${content}</FontSize>`;
    },
  });

  turndownService.addRule('customHeading', {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    replacement: (content, node) => {
      const level = Number((node.nodeName || 'H1').charAt(1));
      return `<Heading level="${level}">${content}</Heading>`;
    },
  });

  turndownService.addRule('customBulletList', {
    filter: (node) => node.nodeName === 'UL',
    replacement: (content) => `<BulletList>${content}</BulletList>`,
  });
  turndownService.addRule('customOrderedList', {
    filter: (node) => node.nodeName === 'OL',
    replacement: (content) => `<OrderedList>${content}</OrderedList>`,
  });

  turndownService.addRule('customListItem', {
    filter: (node) => node.nodeName === 'LI',
    replacement: (content) => `<ListItem>${content}</ListItem>`,
  });


  turndownService.addRule('customBlockquote', {
    filter: 'blockquote',
    replacement: (content) => `<Blockquote>${content}</Blockquote>`,
  });

  turndownService.addRule('customTextAlign', {
    filter: (node) =>
      node.nodeName === 'DIV' && ['left', 'center', 'right'].includes((node as HTMLElement).style.textAlign),
    replacement: (content, node) => {
      const align = (node as HTMLElement).style.textAlign;
      return `<Align align="${align}">${content}</Align>`;
    },
  });
  turndownService.addRule('horizontalRuleToComponent', {
    filter: 'hr',
    replacement: () => `<HorizontalRule />`,
  });

  turndownService.addRule('textAlignToComponent', {
    filter: (node) => {
      if (['P', 'DIV'].includes(node.nodeName)) {
        const align = (node as HTMLElement).style.textAlign;
        return ['left', 'center', 'right'].includes(align);
      }
      return false;
    },
    replacement: (content, node) => {
      const align = (node as HTMLElement).style.textAlign;
      return `<Align align="${align}">${content}</Align>`;
    },
  });


  useEffect(() => {
    const tiptapEditor = new Editor({
      extensions: [
        StarterKit.configure({
          heading: false,
          bulletList: false,
          orderedList: false,
          blockquote: false,
        }),
        Heading.configure({
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: 'text-2xl font-bold my-3',
          },
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: 'list-disc list-inside ml-4',
          },
        }),
        OrderedList.configure({
          HTMLAttributes: {
            class: 'list-decimal list-inside ml-4',
          },
        }),
        Blockquote.configure({
          HTMLAttributes: {
            class: 'border-l-4 border-gray-400 pl-4 italic bg-gray-50 dark:bg-gray-800 dark:text-white my-3 rounded',
          },
        }),

        Underline,
        Image.configure({ allowBase64: true }),
        TextStyle.configure({}),
        Color,
        TextAlign.configure({
          types: ['heading', 'paragraph'], // This is correct
        }),
        FontSize,
        TextStyle,
      ],
      content: '',
      editorProps: {
        attributes: {
          class: 'editor-content min-h-[500px] max-h-[80vh] overflow-y-auto border rounded p-3 focus:outline-none',
        },
      },
    });

    setEditor(tiptapEditor);
    return () => tiptapEditor.destroy();
  }, []);

  const handleSave = async () => {
    if (!editor || !title.trim() || !description.trim()) {
      return alert('Please fill in at least title, description, and content.');
    }

    const html = editor.getHTML();
    let markdown = turndownService.turndown(html);

    // Cleanup extra whitespace inside JSX-like tags
    const tagsToClean = ['ListItem', 'Blockquote', 'Align', 'Color', 'FontSize', 'Heading'];
    tagsToClean.forEach(tag => {
      const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'g');
      markdown = markdown.replace(regex, (_, content) => {
        const trimmed = content.trim().replace(/\n\s*\n/g, '\n');
        return `<${tag}>${trimmed}</${tag}>`;
      });
    });

    const frontmatter = `---\n` +
      `title: "${title.trim()}"\n` +
      `date: "${new Date().toISOString().split('T')[0]}"\n` +
      `description: "${description.trim()}"\n` +
      `author: "${author.trim() || 'Anonymous'}"\n` +
      `coverImage: ${coverImage.trim() || '""'}\n` +
      `tag: ${tag.trim() || '""'}\n` +
      `---\n\n`;

    const finalContent = frontmatter + markdown;

    setSaving(true);

    try {
      await axios.post('/api/blog/create', {
        slug: title.trim(),
        content: finalContent,
      });
      alert('Blog post saved!');
      editor.commands.clearContent();
      setTitle('');
      setDescription('');
      setAuthor('');
      setCoverImage('');
      setTag('');
    } catch (err) {
      console.error("Error saving post:", err);
      alert('Error saving post.');
    } finally {
      setSaving(false);
    }
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      editor.chain().focus().setImage({ src: reader.result as string }).run();
    };
    reader.readAsDataURL(file);
  };

  const triggerImageInput = () => fileInputRef.current?.click();
  const applyColor = (color: string) => editor?.chain().focus().setColor(color).run();
  const applyFontSize = (size: string) => editor?.chain().focus().setFontSize(size).run();

  if (!editor) return null;

  return (
    <div className="max-w-6xl mx-auto p-4 h-[100vh] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 text-lg font-semibold border rounded w-full md:col-span-3"
        />

        {/* Description */}
        <input
          type="text"
          placeholder="Brief description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 text-base border rounded w-full md:col-span-3"
        />

        {/* Author */}
        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-3 text-base border rounded w-full"
        />

        {/* Cover Image */}
        <input
          type="text"
          placeholder="Cover image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="p-3 text-base border rounded w-full"
        />

        {/* Tag */}
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="p-3 text-base border rounded w-full"
        />
      </div>


    <div className="prose prose-lg max-w-none">
      <EditorContent editor={editor} className="h-full dark:bg-gray-700 " />
    </div>

    <div className="flex flex-wrap justify-center gap-3 p-2 border-t mt-4 bg-white dark:bg-gray-700 sticky bottom-0 z-10 shadow-md">
      <button onClick={() => editor.chain().focus().toggleBold().run()} title="Bold"><FaBold /></button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic"><FaItalic /></button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline"><FaUnderline /></button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="Heading 1"><FaHeading /></button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet List"><FaListUl /></button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered List"><FaListOl /></button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Quote"><FaQuoteRight /></button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule"><FaMinus /></button>
      <button onClick={() => editor.chain().focus().setTextAlign('left').run()} title="Align Left"><FaAlignLeft /></button>
      <button onClick={() => editor.chain().focus().setTextAlign('center').run()} title="Align Center"><FaAlignCenter /></button>
      <button onClick={() => editor.chain().focus().setTextAlign('right').run()} title="Align Right"><FaAlignRight /></button>
      <button onClick={triggerImageInput} title="Insert Image"><FaImage /></button>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} hidden />
      <input type="color" onChange={(e) => applyColor(e.target.value)} title="Text color" className="w-6 h-6 rounded" />
      <select onChange={(e) => applyFontSize(e.target.value)} className="p-1 border rounded text-sm" title="Font size">
        <option value="">Font Size</option>
        <option value="12px">12px</option>
        <option value="16px">16px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="32px">32px</option>
      </select>
      <button
        onClick={handleSave}
        disabled={saving}
        title="Save"
        className="px-3 py-1 bg-teal-600 text-white rounded flex items-center gap-1"
      >
        <FaSave /> {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
    </div>
  );
}

