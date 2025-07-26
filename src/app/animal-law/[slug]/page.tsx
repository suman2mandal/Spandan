'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { compileMDX } from 'next-mdx-remote/rsc';
import { useParams } from 'next/navigation';
import CWrapper from '@/components/wrappers/component-wrapper';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import type { Law, LawFrontmatter } from '@/types/law';
import axios from 'axios';

export default function AnimalLawPage() {
  const params = useParams();
  const slug = decodeURIComponent(params?.slug as string || '');
  const laws = useSelector((state: RootState) => state.animalLaw.laws);
  const [law, setLaw] = useState<Law | null>(null);
  const [frontmatter, setFrontmatter] = useState<LawFrontmatter | null>(null);
  const [compiledContent, setCompiledContent] = useState<React.ReactNode>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLaw = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      setLoading(true);

      // Step 1: Try to find in Redux
      let found = laws.find((law) => law.slug === slug);

      // Step 2: If not found, fetch directly from API
      if (!found) {
        try {
          const res = await axios.get(`/api/animal-law/${encodeURIComponent(slug)}`);
          found = res.data as Law;
        } catch (err) {
          console.error('❌ Failed to fetch law from API:', err);
          setLaw(null);
          setCompiledContent(null);
          setLoading(false);
          return;
        }
      }

      setLaw(found);

      // Step 3: Compile MDX
      try {
        const { content, frontmatter } = await compileMDX<LawFrontmatter>({
          source: found.content,
          options: { parseFrontmatter: true },
        });

        setFrontmatter(frontmatter);
        setCompiledContent(content);
      } catch (err) {
        console.error('❌ MDX compilation error:', err);
        setCompiledContent(null);
      }

      setLoading(false);
    };

    loadLaw();
  }, [laws, slug]);

  if (!params?.slug) {
    return <p className="text-center mt-20 text-red-500">Invalid route.</p>;
  }

  if (loading) {
    return <p className="text-center mt-20">Loading law details...</p>;
  }

  if (!law || !compiledContent || !frontmatter) {
    return <p className="text-center mt-20 text-red-500">404 – Law not found.</p>;
  }

  return (
    <CWrapper>
      <main className="w-full">
        {/* Cover Section */}
        <div className="mb-10 relative rounded-xl overflow-hidden shadow-lg">
          <div
            className="h-56 sm:h-96 flex items-center justify-center text-center px-4"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 128, 128, 0.3)), url('${frontmatter.coverImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h1 className="text-white text-3xl sm:text-5xl font-bold font-raleway max-w-3xl">
              {frontmatter.title}
            </h1>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-10">
          <span>Last updated on {frontmatter.date || 'Unknown date'}</span>
          <button className="ml-auto text-teal-600 hover:text-teal-800 flex items-center gap-1">
            {/* Bookmark */}
          </button>
          <button className="text-gray-500 hover:text-teal-700 flex items-center gap-1">
            {/* Share */}
          </button>
        </div>

        {/* Main MDX Article */}
        <article className="prose dark:text-white prose-teal max-w-none dark:prose-invert">
          {compiledContent}
        </article>

        {/* Optional Static Navigation */}
        <div className="mt-12 flex justify-between text-sm text-teal-600">
          <Link href="/animal-law/abc-dog-rules" className="hover:underline">
            ← ABC Rules, 2001
          </Link>
          <Link
            href="/animal-law/The Wildlife Protection Act 1972 Safeguarding India’s Natural Heritage"
            className="hover:underline"
          >
            Wildlife Protection Act, 1972 →
          </Link>
        </div>
      </main>
    </CWrapper>
  );
}
