'use client';

import Header from '@/components/wrappers/Header';
import CWrapper from '@/components/wrappers/component-wrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimalBirthControl() {
  return (
    <CWrapper>
      <div className="">
        <Header
          title="Spay & Neuter Program"
          subtitle="Breaking the cycle of suffering by controlling the street dog population ethically."
        />

        <section className="py-16 px-4 md:px-20 lg:px-36 text-lg space-y-10">
          <div className="space-y-6">
            <p>
              Spandan is committed to reducing the suffering of street animals through humane population control. Every day,
              unsterilized dogs and cats give birth to litters of babies who face starvation, disease, accidents, and abuse.
              Our spay and neuter initiative tackles this crisis at its root — by preventing unwanted births.
            </p>

            <p>
              Each year, thousands of stray dogs are born into a life of hardship. Through our Animal Birth Control (ABC) program,
              we sterilize and vaccinate street dogs, ensuring that they don’t continue an endless cycle of suffering.
            </p>

            <h2 className="text-2xl font-semibold text-teal-700">How It Works</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Street dogs are humanely captured by our trained team.</li>
              <li>They are brought to our hospital and given pre-surgical care.</li>
              <li>Qualified vets perform sterilization surgeries under safe and hygienic conditions.</li>
              <li>Each dog is also vaccinated against rabies.</li>
              <li>After a short recovery period, they are released back to their territory.</li>
            </ul>

            <p>
              Our goal is not just to reduce population, but to ensure every sterilized animal gets medical care, compassion,
              and a chance at a healthier life. With your support, we can cover more areas and reach more animals in need.
            </p>

            <Image
              src="https://images.unsplash.com/photo-1707298866020-489051d2db20?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Spay surgery preparation"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg"
            />

            <h2 className="text-2xl font-semibold text-teal-700 mt-10">Why Spay and Neuter?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduces animal suffering on the streets.</li>
              <li>Prevents deadly diseases and infections.</li>
              <li>Decreases dog-human conflicts and road accidents.</li>
              <li>Enables healthier and longer lives for street animals.</li>
              <li>Reduces pressure on shelters and rescue organizations.</li>
            </ul>

            <p>
              Sterilization isn’t just a medical procedure — it’s a compassionate choice. It’s the most effective and ethical way
              to improve the lives of animals who would otherwise struggle to survive.
            </p>

            <Image
              src="https://images.unsplash.com/photo-1707298866020-489051d2db20?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Post-surgery recovery"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg"
            />

            <h2 className="text-2xl font-semibold text-teal-700 mt-10">How You Can Help</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Donate to fund more surgeries and vaccinations.</li>
              <li>Volunteer to help with awareness and logistics.</li>
              <li>Report unsterilized dogs in your locality.</li>
              <li>Spread the word about the importance of spay/neuter.</li>
            </ul>

            <div className="mt-10 text-center">
              <Link href="/donate" passHref>
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                  Support This Cause
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </CWrapper>
  );
} 
