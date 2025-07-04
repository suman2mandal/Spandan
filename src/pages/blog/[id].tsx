// components/BlogPost.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 py-10 relative">
      {/* Header Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1"
          alt="Blog Hero"
          width={1200}
          height={500}
          className="object-cover w-full h-96"
          priority
        />
      </div>

      {/* Blog Card */}
      <div className="max-w-3xl mx-auto -mt-32 z-10 relative">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Revenge of the Never Trumpers
          </h1>

          <p className="text-sm text-gray-600 mb-2">
            Written By:{' '}
            <Link href="#" className="text-teal-600 hover:text-teal-800 font-semibold">
              Ahmad Sultani
            </Link>{' '}
            in{' '}
            <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm">
              Election
            </Link>
            ,{' '}
            <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm">
              Politics
            </Link>
          </p>

          <div className="text-gray-700 leading-relaxed space-y-6 mt-6 text-base">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s...
            </p>

            <h3 className="text-2xl font-semibold">#1. What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has
              survived not only five centuries, but also the leap into electronic typesetting...
            </p>

            <blockquote className="border-l-4 border-teal-500 pl-4 italic text-teal-700">
              &apos;Lorem Ipsum is simply dummy text of the printing and typesetting industry...&apos;
            </blockquote>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was
              popularised in the 1960s with the release of Letraset sheets...
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 space-x-3">
            {['#Election', '#People', '#Election2020', '#Trump', '#Joe'].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="text-sm text-teal-600 hover:text-teal-800 font-medium"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
