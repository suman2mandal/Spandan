import { compileMDX } from "next-mdx-remote/rsc";
import clientPromise from "@/lib/mongodb";
import CWrapper from "@/components/wrappers/component-wrapper";
import Link from "next/link";

type Frontmatter = {
  title: string;
  date?: string;
  author?: string;
  description: string;
  coverImage: string;
  tag: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = decodeURIComponent(slug);

  const client = await clientPromise;
  const db = client.db("Animal-Law");

  const post = await db.collection("Legal-Provisions").findOne({ slug: title });
  if (!post) return <p className="text-center mt-20 text-red-500">404 – Law not found.</p>;

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: post.content,
    options: { parseFrontmatter: true },
  });

  return (
    <CWrapper>
      {/* Main Content */}
      <main className="w-full">
        <div className="mb-10 relative rounded-xl overflow-hidden shadow-lg">
          <div
            className="h-56 sm:h-96 flex items-center justify-center text-center px-4"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 128, 128, 0.3)), url('${frontmatter.coverImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-white text-3xl sm:text-5xl font-bold font-raleway max-w-3xl">
              {frontmatter.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-10">
          <span>Last updated on {frontmatter.date}</span>
          <button className="ml-auto text-teal-600 hover:text-teal-800 flex items-center gap-1">
            {/* Bookmark */}
          </button>
          <button className="text-gray-500 hover:text-teal-700 flex items-center gap-1">
            {/* Share */}
          </button>
        </div>

        <article className="prose dark:text-white prose-teal max-w-none dark:prose-invert">
          {content}
        </article>

        {/* Optional Navigation (can be dynamic later) */}
        <div className="mt-12 flex justify-between text-sm text-teal-600">
          <Link href="/animal-law/abc-dog-rules" className="hover:underline">
            ← ABC Rules, 2001
          </Link>
          <Link href="/animal-law/The Wildlife Protection Act 1972 Safeguarding India’s Natural Heritage" className="hover:underline">
            Wildlife Protection Act, 1972 →
          </Link>
        </div>
      </main>
    </CWrapper>
  );
}
