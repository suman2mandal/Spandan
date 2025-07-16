export const dynamic = 'force-dynamic';
import CWrapper from "@/components/wrappers/component-wrapper";
import Heading from "@/components/wrappers/Header";
import Image from "next/image";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { compileMDX } from "next-mdx-remote/rsc";

type Frontmatter = {
  title: string;
  description: string;
  coverImage?: string;
  slug?: string;
};

export default async function AnimalLawsPage() {
  const client = await clientPromise;
  const db = client.db("Animal-Law");

  const rawLaws = await db.collection("Legal-Provisions").find({}).toArray();

  // Parse frontmatter from each law post
  const laws = await Promise.all(
    rawLaws.map(async (law) => {
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: law.content,
        options: { parseFrontmatter: true },
      });

      return {
        ...frontmatter,
        slug: law.slug || slugify(frontmatter.title),
      };
    })
  );

  if (!laws || laws.length === 0) return null;

  const slugify = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <CWrapper>
      <section>
        <Heading
          title="Know the Laws that Protect Animals"
          subtitle="Learn about the legal rights of animals in India and how you can use them to report abuse, prevent cruelty, and support animal welfare efforts effectively."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {laws.map((law) => (
            <div
              key={law.title}
              className="flex flex-col overflow-hidden dark:bg-gray-700 border dark:border-gray-900 border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={law.coverImage || "/images/default.jpg"}
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
      </section>
    </CWrapper>
  );
}
