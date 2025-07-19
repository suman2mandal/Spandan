'use client';

import { useEffect, useState } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import slugify from 'slugify';
import CWrapper from '@/components/wrappers/component-wrapper';
import Heading from '@/components/wrappers/Header';
import Image from 'next/image';
import Link from 'next/link';
import type { Law, LawFrontmatter } from '@/types/law';

interface Props {
  laws: Law[]; // ✅ Input: full laws from Redux
}

export default function HydrationComponent({ laws }: Props) {
  const [parsedLaws, setParsedLaws] = useState<LawFrontmatter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parseLaws = async () => {
      setLoading(true);
      const result: LawFrontmatter[] = [];

      for (const law of laws) {
        try {
          const { frontmatter } = await compileMDX<LawFrontmatter>({
            source: law.content,
            options: { parseFrontmatter: true },
          });

          result.push({
            title: frontmatter.title || 'Untitled',
            description: frontmatter.description || '',
            coverImage: frontmatter.coverImage || '/images/default.jpg',
            slug: law.slug || slugify(frontmatter.title || 'law', { lower: true }),
          });
        } catch (err) {
          console.error('❌ Failed to parse law:', law.slug, err);
        }
      }

      setParsedLaws(result);
      setLoading(false);
    };

    parseLaws();
  }, [laws]);

  if (loading) return <div>Loading...</div>;
  if (parsedLaws.length === 0) return <div>No Law currently available!!</div>;

  return (
    <CWrapper>
      <Heading
        title="Know the Laws that Protect Animals"
        subtitle="Learn about the legal rights of animals in India and how you can use them to report abuse, prevent cruelty, and support animal welfare efforts effectively."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {parsedLaws.map((law) => (
          <div
            key={law.slug}
            className="flex flex-col overflow-hidden dark:bg-gray-700 border dark:border-gray-900 border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={law.coverImage}
                alt={law.title}
                fill
                className="rounded-t-lg object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold dark:text-white text-gray-800">
                  {law.title}
                </h3>
                <p className="text-sm dark:text-gray-300 text-gray-600">
                  {law.description}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/animal-law/${law.slug}`}
                  className="text-sm font-medium text-teal-600 uppercase border-b border-transparent hover:border-teal-600"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CWrapper>
  );
}
