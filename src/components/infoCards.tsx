import Image from 'next/image';
import Link from 'next/link';

export default function InfoCardSection() {
  return (
    <section className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-10 font-raleway">
          Our Values & Information
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
          <Link href="/about/team">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative w-full h-48">
                  <Image
                    src="https://res.cloudinary.com/dfwoqb3vm/image/upload/v1752045441/0e263b65-21c2-456c-b29f-e0a0219dd52f_nrobqz.jpg"
                    alt="Team"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Meet the Team
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  Get to know the rescuers and caregivers who make it all happen.
                </p>
                
                <span className='text-blue-500'> Learn More
                  <svg
                  className="w-3.5 h-3.5 ml-2 inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </span>
                  
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/about/faq">
          <div className="bg-white  dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            
              <div className="relative w-full h-48">
                <Image
                  src="https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
            
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  FAQs
                </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                Find answers to common questions about donations, adoptions, volunteering, and our rescue work.
              </p>
              <span className='text-blue-500'> Learn More
                  <svg
                  className="w-3.5 h-3.5 ml-2 inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </span>
            </div>
          </div>
          </Link>

          

          {/* Card 3 */}
          <Link href="/about/finance">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative w-full h-48">
                <Image
                  src="https://images.pexels.com/photos/5909808/pexels-photo-5909808.jpeg"
                  alt="Finance"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Financial Information
                  </h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                  View monthly financial breakdowns of how your donations are used.
                </p>
                <span className='text-blue-500'> Learn More
                  <svg
                  className="w-3.5 h-3.5 ml-2 inline"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </span>
              </div>
            </div>
            </Link>
          </div>
        </div>
    </section>
  );
}
