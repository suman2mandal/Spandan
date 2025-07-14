'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Header from '@/components/wrappers/Header';
import CWrapper from '@/components/wrappers/component-wrapper';

const HospitalMap = dynamic(() => import('@/components/HospitalMap'), {
  ssr: false,
});

export default function HospitalPage() {
  return (
    <CWrapper>
        <Header
          title="Our Animal Hospital"
          subtitle="A dedicated space for treatment, care, and recovery of injured and sick street animals — equipped with essential facilities and run by compassionate professionals."
        />

        {/* Success Stories Section */}
        <section className="py-20 px-6 md:px-32 text-gray-800">
          <h2 className="text-3xl font-bold text-teal-700 text-center mb-12">Stories of Hope and Healing</h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-teal-100 dark:bg-gray-700 dark:text-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Bruno’s Recovery</h3>
              <p>
                Bruno, a street dog hit by a vehicle, was brought in with a fractured leg and internal injuries. With intensive
                care and surgery from our veterinary team, Bruno not only survived but thrived. He now lives with a loving
                foster family.
              </p>
            </div>

            <div className="bg-teal-100 dark:bg-gray-700 dark:text-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">Munni’s Transformation</h3>
              <p>
                Munni came to us covered in wounds, scared and malnourished. Our caretakers worked for weeks to rebuild her health.
                Today, Munni is healthy, vaccinated, and on her way to adoption. Her journey is one of courage and love.
              </p>
            </div>
          </div>
        </section>
        

        {/* Extended Hospital Details */}
        <section className="py-16 px-6 md:px-32 bg-teal-50 dark:bg-gray-800 dark:text-white text-gray-800">
          <h2 className="text-3xl font-bold text-teal-700 text-center mb-10">Our Mission to Heal</h2>
          <p className="max-w-5xl mx-auto mb-8">
            At Spandan, our animal hospital stands as a sanctuary for the voiceless. Every injured, abused, or ill street animal
            that comes to us receives immediate medical attention, emotional support, and round-the-clock care. Our experienced team
            of veterinarians, caregivers, and volunteers works tirelessly to ensure no animal suffers needlessly.
          </p>
          <p className="max-w-5xl mx-auto mb-8">
            With facilities like on-site surgery, post-operative recovery areas, trauma care, isolation wards, and diagnostic tools,
            our hospital is equipped to deal with the wide range of emergencies that street animals face daily. We treat more than
            100 animals every month, including dogs, cats, and even cattle and birds.
          </p>
          <p className="max-w-5xl mx-auto mb-8">
            Every treatment is provided free of cost to the street animal, thanks to your generous donations. Spandan believes
            in ethical care, pain management, and transparent treatment protocols.
          </p>
        </section>

       

        <div className="mt-20  grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Map Section */}
          <div className="w-full h-[400px] shadow-md rounded-2xl overflow-hidden">
            <HospitalMap />
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <div className="text-lg dark:text-white text-gray-700 space-y-4">
              <p className="text-xl font-semibold dark:text-white text-gray-900">
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

        {/* Final CTA */}
        <section className="py-20 px-6 md:px-32 bg-teal-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Your Support Heals</h2>
          <p className="max-w-3xl mx-auto mb-6">
            With your help, we can expand our hospital’s reach, upgrade our medical equipment, and never turn away an animal in need.
            Join us in our mission — every contribution counts.
          </p>
          <Link href="/donate" passHref>
            <div className="inline-block bg-white text-teal-700 px-6 py-3 rounded-full font-medium hover:bg-teal-100 transition cursor-pointer">
              Donate to the Hospital
            </div>
          </Link>
        </section>
    </CWrapper>
  );
}