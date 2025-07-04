import Image from 'next/image';
import Link from 'next/link';
import Heading from './Header';


export default function GetInvolvedSection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
    <Heading>Get Involved</Heading>


      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[210px]">
        {/* Volunteer */}
        <Link
          href="volunteer"
          className="group relative block rounded-xl overflow-hidden lg:col-span-2 row-span-2"
        >
          <Image
            src="/images/help.jpg"
            alt="Volunteer with Animals"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-teal-100 bg-opacity-90 flex items-center justify-center p-2 text-center transition-all duration-300 group-hover:backdrop-blur-sm">
            <div className="transform group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-teal-900 text-3xl font-bold">
                Volunteer with Animals
              </h3>
              <p className="text-teal-800 mt-1">
                Be the hands that heal the voiceless.
              </p>
            </div>
          </div>
        </Link>

        {/* Donate */}
        <Link
          href="/donate"
          className="group flex flex-col items-start gap-1 rounded-xl border border-teal-100 bg-white p-3 shadow hover:shadow-md transition"
        >
          <div className="bg-teal-50 p-2 rounded-lg group-hover:scale-105">
            <svg
              className="w-4 h-4 text-green-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <div className="group-hover:-translate-y-1 group-hover:scale-105">
            <h3 className="text-3xl font-semibold text-teal-900">Donate</h3>
            <p className="text-teal-800">
              Fuel our rescues. Every rupee counts.
            </p>
          </div>
        </Link>

        {/* Shop */}
        <Link
          href="/shop"
          className="group relative block rounded-xl overflow-hidden"
        >
          <Image
            src="/images/shop.jpg"
            alt="Shop"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-teal-100 bg-opacity-90 flex items-center justify-center p-2 text-center group-hover:backdrop-blur-sm">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-teal-900 text-3xl font-bold">Shop</h3>
              <p className="text-teal-800 mt-1">
                Buy with heart—every purchase helps.
              </p>
            </div>
          </div>
        </Link>

        {/* Sponsor */}
        <Link
          href="/sponsor"
          className="group flex flex-col items-start gap-1 rounded-xl border border-teal-100 bg-white p-3 shadow hover:shadow-md transition"
        >
          <div className="bg-teal-50 p-2 rounded-lg group-hover:scale-105">
            <svg
              className="w-4 h-4 text-green-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <div className="group-hover:-translate-y-1 group-hover:scale-105">
            <h3 className="text-3xl font-semibold text-teal-900">Sponsor an Animal</h3>
            <p className="text-teal-800">
              Support a life monthly, see the change.
            </p>
          </div>
        </Link>

        {/* Legacy */}
        <Link
          href="/legacy"
          className="group relative block rounded-xl overflow-hidden lg:col-span-2 row-span-2"
        >
          <Image
            src="/images/legacy.jpg"
            alt="Create a Legacy"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-teal-100 bg-opacity-90 flex items-center justify-center p-2 text-center group-hover:backdrop-blur-sm">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-teal-900 text-3xl font-bold">Create a Legacy</h3>
              <p className="text-teal-800 mt-1">
                Leave love behind that lives on.
              </p>
            </div>
          </div>
        </Link>

        {/* Adopt */}
        <Link
          href="/adopt"
          className="group relative block rounded-xl overflow-hidden"
        >
          <Image
            src="/images/adopt.jpg"
            alt="Adopt"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-teal-100 bg-opacity-90 flex items-center justify-center p-2 text-center group-hover:backdrop-blur-sm">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-teal-900 text-3xl font-bold">Adopt</h3>
              <p className="text-teal-800 mt-1">
                Give a forever home to a street soul.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
