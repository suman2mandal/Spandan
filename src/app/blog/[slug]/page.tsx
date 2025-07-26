'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { compileMDX } from 'next-mdx-remote/rsc';
import { RootState } from '@/redux/store';
import type { Post, PostFrontmatter } from '@/types/post';
import CWrapper from '@/components/wrappers/component-wrapper';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

// MDX Components
import Underline from '@/components/mdx-components/Underline';
import FontSize from '@/components/mdx-components/FontSize';
import Color from '@/components/mdx-components/Color';
import Heading from '@/components/mdx-components/Heading';
import BulletList from '@/components/mdx-components/BulletList';
import OrderedList from '@/components/mdx-components/OrderedList';
import ListItem from '@/components/mdx-components/ListItem';
import Blockquote from '@/components/mdx-components/Blockquote';
import Align from '@/components/mdx-components/Align';
import HorizontalRule from '@/components/mdx-components/HorizontalRule';

export default function BlogPostPage() {
  const slug = useParams();
  const decodedSlug = decodeURIComponent(slug?.slug as string || '');
  const blogs = useSelector((state: RootState) => state.blog.post);

  const [post, setPost] = useState<Post | null>(null);
  const [frontmatter, setFrontmatter] = useState<PostFrontmatter | null>(null);
  const [compiledContent, setCompiledContent] = useState<React.ReactNode | null>(null);
  const [loading, setLoading] = useState(true);

  const components = useMemo(() => 
  ({
    Underline,
    FontSize,
    Color,
    Heading,
    BulletList,
    OrderedList,
    ListItem,
    Blockquote,
    Align,
    HorizontalRule,
  }),[]);

  useEffect(() => {
    const loadPost = async () => {
      if (!decodedSlug) {
        setLoading(false);
        return;
      }

      setLoading(true);

      // ✅ Step 1: Try Redux
      let found = blogs.find((post) => post.slug === decodedSlug);

      if (!found) {
        console.log('❌ Not found in Redux, fetching from API:', decodedSlug);
        try {
          const res = await axios.get(`/api/blog/getBlog/${encodeURIComponent(decodedSlug)}`);
          found = res.data;
        } catch (err) {
          console.error('❌ Blog fetch error:', err);
          setPost(null);
          setCompiledContent(null);
          setLoading(false);
          return;
        }
      } else {
        console.log('✅ Loaded from Redux:', found.title);
      }

      if (!found) {
        setPost(null);
        setCompiledContent(null);
        setLoading(false);
        return;
      }

      setPost(found);

      try {
        const { content, frontmatter } = await compileMDX<PostFrontmatter>({
          source: found.content,
          options: { parseFrontmatter: true },
          components,
        });

        setFrontmatter(frontmatter);
        setCompiledContent(content);
      } catch (err) {
        console.error('❌ MDX compile error:', err);
        setCompiledContent(null);
      }

      setLoading(false);
    };

    loadPost();
  }, [decodedSlug, blogs, components]);


  if (loading) return <p className="text-center mt-10">Loading post...</p>;

  if (!post || !compiledContent || !frontmatter)
    return <p className="text-center text-red-500 mt-10">404 – Blog post not found.</p>;

  return (
    <CWrapper>
      <article className="prose dark:text-white prose-teal max-w-none dark:prose-invert">
        <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={frontmatter.coverImage || '/images/SpandanLogo.png'}
            alt={frontmatter.title}
            width={1800}
            height={900}
            className="object-cover w-full h-80 sm:h-[32rem]"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold">{frontmatter.title}</h1>
        <p className="text-sm text-gray-600 mb-6">
          Written by <strong>{frontmatter.author || 'Unknown'}</strong> on{' '}
          {frontmatter.date || 'Unknown date'}
        </p>

        {compiledContent}

        <div className="mt-8 flex gap-2">
          {frontmatter.tag?.split(',').map((tag) => (
            <span key={tag} className="text-sm text-teal-600 font-medium">
              #{tag.trim()}
            </span>
          ))}
        </div>

        <div className="mt-12 flex justify-between text-sm text-teal-600">
          <Link href="/blog/sample-prev-post" className="hover:underline">
            ← Previous Post
          </Link>
          <Link href="/blog/sample-next-post" className="hover:underline">
            Next Post →
          </Link>
        </div>
      </article>
    </CWrapper>
  );
}
