'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

const HospitalMap = dynamic(() => import('@/components/HospitalMap'), {
  ssr: false,
});

export default function HospitalPage() {
  return (
    <div className="bg-white  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header>
            Our Animal Hospital
        </Header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="w-full h-[400px] shadow-md rounded-2xl overflow-hidden">
            <HospitalMap />
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <div className="text-lg text-gray-700 space-y-4">
              <p className="text-xl font-semibold text-gray-900">
                Spandan Animal Hospital
              </p>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-6 h-6 text-teal-600" />
                <p>
                  45/3 Barkul Road, Diamond Harbour,<br />
                  West Bengal, India – 743331
                </p>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="w-6 h-6 text-teal-600" />
                <p>
                  +91 98765 43210<br />
                  (Available 9 AM – 8 PM daily)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-6 h-6 text-teal-600" />
                <p>
                  Open all 7 days<br />
                  Emergency Services Available
                </p>
              </div>
            </div>

            {/* CTA Button with Link */}
            <div className="mt-8">
              <Link href="/get-help" passHref>
                <div className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition cursor-pointer">
                  Need Urgent Help? Contact Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
