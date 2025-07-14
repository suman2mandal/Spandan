// app/help/page.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/wrappers/Header';
import CWrapper from '@/components/wrappers/component-wrapper';

export default function HelpPage() {
  return (
    <>
    <CWrapper>
      <Head><title>Help | Spandan</title></Head>
      <div className="bg-gradient-to-b ">
        <Heading
          title="How to Help"
          subtitle="Explore different ways you can contribute to Spandan’s mission — from volunteering and fostering to donating or spreading awareness. Every small act counts."
        />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] md:auto-rows-[210px]">
        {/* Volunteer */}
        <Link
          href="/how-to-help/volunteer"
          className="group relative block rounded-xl overflow-hidden lg:col-span-2 row-span-2"
        >
          <Image
            src="https://res.cloudinary.com/dfwoqb3vm/image/upload/v1752148622/WhatsApp_Image_2025-07-10_at_17.21.22_6b898dbb_rzfiiw.jpg"
            alt="Volunteer with Animals"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-center justify-center p-2 text-center transition-all duration-300">
            <div className="transform group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">Volunteer with Animals</h3>
              <p className="text-gray-200 mt-1 drop-shadow">Be the hands that heal the voiceless.</p>
            </div>
          </div>
        </Link>

        {/* Donate */}
        <Link
          href="/how-to-help/donate"
          className="group relative block rounded-xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop"
            alt="/how-to-help/foster"
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent flex items-center justify-center p-2 text-center">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">Donate</h3>
              <p className="text-gray-100 mt-1 drop-shadow">Fuel our rescues. Every rupee counts.</p>
            </div>
          </div>
        </Link>

        {/* Shop */}
        <Link
          href="/how-to-help/shop"
          className="group relative block rounded-xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1519953726-e02e128a8847?q=80&w=736&auto=format&fit=crop"
            alt="Shop"
            fill
            priority
            quality={100}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-red-900/20 to-transparent flex items-center justify-center p-2 text-center">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">Shop</h3>
              <p className="text-gray-100 mt-1 drop-shadow">Buy with heart—every purchase helps.</p>
            </div>  
          </div>
        </Link>

        {/* Adopt */}
        <Link
          href="/how-to-help/adopt"
          className="group relative block rounded-xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1627809616890-ee6ab764cbde?q=80&w=1170&auto=format&fit=crop"
            alt="/how-to-help/Adopt"
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-red-900/20 to-transparent flex items-center justify-center p-2 text-center">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">Adopt an Animal</h3>
              <p className="text-gray-100 mt-1 drop-shadow">Give a forever home to a street soul.</p>
            </div>
          </div>
        </Link>

        {/* Campaign */}
        <Link
          href="/how-to-help/campaigns"
          className="group relative block rounded-xl overflow-hidden lg:col-span-2 row-span-2"
        >
          <Image
            src="https://images.unsplash.com/flagged/photo-1576750838333-bb2fa29750f4?q=80&w=1170&auto=format&fit=crop"
            alt="Join our Campaign"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-center justify-center p-2 text-center transition-all duration-300">
            <div className="transform group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">Join our Campaign</h3>
              <p className="text-gray-200 mt-1 drop-shadow">Be the hands that help the voiceless.</p>
            </div>
          </div>
        </Link>


        {/* Foster */}
        <Link
          href="/how-to-help/foster"
          className="group relative block rounded-xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1621458257745-67d49c0b787c?q=80&w=1631&auto=format&fit=crop"
            alt="/how-to-help/foster"
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent flex items-center justify-center p-2 text-center">
            <div className="group-hover:-translate-y-1 group-hover:scale-105">
              <h3 className="text-white text-3xl font-bold drop-shadow-lg">Foster an Animal</h3>
              <p className="text-gray-100 mt-1 drop-shadow">Support a life monthly, see the change.</p>
            </div>
          </div>
        </Link>
      </div>
      </div>
      </CWrapper>
    </>
  );
}
