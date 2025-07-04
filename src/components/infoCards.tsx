import Image from 'next/image';
import Link from 'next/link';

export default function InfoCardSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-10 font-raleway">
          Our Values & Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <Link href="/team">
              <div className="relative w-full h-48">
                <Image
                  src="/images/team.jpg"
                  alt="Team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </Link>
            <div className="p-5">
              <Link href="/team">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Meet the Team
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700">
                Get to know the rescuers and caregivers who make it all happen.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <Link href="/faq">
              <div className="relative w-full h-48">
                <Image
                  src="/images/mission.jpg"
                  alt="Mission"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </Link>
            <div className="p-5">
              <Link href="/faq">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  FAQs
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700">
                Find answers to common questions about donations, adoptions, volunteering, and our rescue work.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

          

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <Link href="/finance">
              <div className="relative w-full h-48">
                <Image
                  src="/images/finance.jpg"
                  alt="Finance"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            </Link>
            <div className="p-5">
              <Link href="/finance">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Financial Information
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700">
                View monthly financial breakdowns of how your donations are used.
              </p>
              <Link
                href="/finance"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
