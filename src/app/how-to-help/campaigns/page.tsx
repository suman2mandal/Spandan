'use client';

import Header from '@/components/wrappers/Header';
import CWrapper from '@/components/wrappers/component-wrapper';
import Image from 'next/image';
import Link from 'next/link';

const campaigns = [
  {
    title: 'Monsoon Feeding Drive',
    image: 'https://images.unsplash.com/photo-1711693425960-d4ff44772e51?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Heavy rains leave many street animals without shelter and food. Join us in feeding and protecting them this monsoon.',
    link: '/how-to-help/campaigns/monsoon-feeding-drive',
    raised: 42000,
    goal: 60000,
  },
  {
    title: 'Vaccinate Every Paw',
    image: 'https://images.unsplash.com/photo-1719464454959-9cf304ef4774?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Help us vaccinate hundreds of vulnerable street dogs and cats to protect them from deadly diseases like rabies.',
    link: '/how-to-help/campaigns/vaccinate-every-paw',
    raised: 18000,
    goal: 30000,
  },
  {
    title: 'Sterilization Marathon',
    image: 'https://images.unsplash.com/photo-1734549343493-c4f08ea3afee?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Support our mega ABC camp to spay and neuter as many street dogs as possible in high-density areas.',
    link: '/how-to-help/campaigns/sterilization-marathon',
    raised: 35500,
    goal: 50000,
  },
  {
    title: 'Street Rescue Emergency Fund',
    image: 'https://images.unsplash.com/photo-1718939043669-623a89142fc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Help us respond quickly to critical injury cases with an emergency rescue fund dedicated to life-saving interventions.',
    link: '/how-to-help/campaigns/street-rescue-emergency-fund',
    raised: 62000,
    goal: 75000,
  },
];

export default function CampaignPage() {
  return (
    <CWrapper>
      <div className=" text-gray-900">
        <Header
          title="Campaigns For Compassion"
          subtitle="Join our active missions to protect, heal, and empower the lives of voiceless animals."
        />

        <section className="py-16 px-4 md:px-20 lg:px-36">
          <div className="grid md:grid-cols-2 gap-10">
            {campaigns.map((campaign, idx) => {
              const percentRaised = Math.min(
                100,
                Math.round((campaign.raised / campaign.goal) * 100)
              );

              return (
                <Link
                  key={idx}
                  href={campaign.link}
                  className="block bg-teal-50 dark:bg-gray-700 border border-teal-100 dark:border-gray-900 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition duration-300 overflow-hidden group"
                >
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    width={700}
                    height={400}
                    className="object-cover w-full h-64 group-hover:opacity-95 transition rounded-t-2xl"
                  />

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold dark:text-white text-teal-700">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-700 dark:text-white text-sm leading-relaxed">
                      {campaign.description}
                    </p>

                    <div className="mt-4">
                      <div className="h-3 w-full bg-teal-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-600"
                          style={{ width: `${percentRaised}%` }}
                        ></div>
                      </div>
                      <p className="text-xs dark:text-white text-gray-600 mt-1">
                        ₹{campaign.raised.toLocaleString()} raised of ₹{campaign.goal.toLocaleString()} goal
                      </p>
                    </div>

                    <div className="pt-4">
                      <span className="inline-block text-sm font-medium text-teal-600 group-hover:text-teal-800">
                        Click to Learn More & Donate →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="bg-teal-600 text-white py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Want to Start a Campaign?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We welcome individuals, schools, and local groups to join hands with us. Raise awareness, organize a drive, or
            fundraise — we&apos;ll support your efforts to create change for animals.
          </p>
          <Link href="/contact" passHref>
            <button className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </Link>
        </section>
      </div>
    </CWrapper>
  );
}
