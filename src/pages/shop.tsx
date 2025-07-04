'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';

const NearestShopsMap = dynamic(() => import('@/components/NearestShopsMap'), {
  ssr: false,
});

export default function NearestShopsPage() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-700 text-center mb-12 font-raleway">
          Nearest Medical Shops
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <NearestShopsMap />
          </div>

          {/* Info Panel */}
          <div className="space-y-6 text-gray-700 text-lg">
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 text-teal-600" />
              <p>
                These shops are located near our hospital and shelter areas. They provide essential pet and medical supplies.
              </p>
            </div>
            <div>
              <ul className="list-disc pl-6">
                <li>Shop 1 – Near Diamond Harbour</li>
                <li>Shop 2 – Behala Area</li>
                <li>Shop 3 – Joka Market</li>
                <li>Shop 4 – Tollygunge</li>
                <li>Shop 5 – New Alipore</li>
              </ul>
            </div>

            <Link href="/get-help" passHref>
              <div className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition cursor-pointer mt-4">
                Back to Help Page
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
