// import Heading from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection() {
  const featuredPost = {
    title: 'Brave Pup Saved from Highway Chaos',
    img: '/images/blog-feature.jpg',
    tag: 'Rescue',
    href: '/blog/brave-pup-rescue',
    desc: 'Our volunteers rushed to save a dog injured in a hit-and-run. Here’s how Spandan turned the situation around.',
  };

  const smallPosts = [
    {
      title: 'Monsoon Feeding Drive in Rural Bengal',
      img: '/images/blog1.jpg',
      tag: 'Community',
      href: '/blog/monsoon-feeding-drive',
    },
    {
      title: 'Volunteer Spotlight: A Hero Among Us',
      img: '/images/blog2.jpg',
      tag: 'Team',
      href: '/blog/volunteer-hero',
    },
    {
      title: 'What to Do if You See an Injured Dog',
      img: '/images/blog3.jpg',
      tag: 'Awareness',
      href: '/blog/injured-dog-help',
    },
  ];

  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl mt-9 font-bold text-teal-800 font-raleway">Latest Updates & Stories</h2>
          <p className="mt-4 text-teal-700 md:text-5xltext-lg max-w-4xl mx-auto">
            Read inspiring stories, rescue operations, and important updates from Spandan’s journey in animal welfare.
          </p>
        </div>

        {/* Flex layout for blog cards */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left: Featured Blog */}
          <Link
            href={featuredPost.href}
            className="block group bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden w-full lg:w-2/3"
          >
            <div className="relative h-80 w-full">
              <Image
                src={featuredPost.img}
                alt={featuredPost.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs text-teal-600 uppercase font-semibold">{featuredPost.tag}</span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-teal-700">{featuredPost.title}</h3>
              <p className="mt-2 text-gray-600">{featuredPost.desc}</p>
            </div>
          </Link>

          {/* Right: Smaller Blogs */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {smallPosts.map((post, idx) => (
              <Link
                href={post.href}
                key={idx}
                className="block group bg-white rounded-lg shadow hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-teal-600 uppercase font-semibold">{post.tag}</span>
                  <h4 className="mt-1 font-semibold text-lg text-gray-900 group-hover:text-teal-700">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
