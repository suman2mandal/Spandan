'use client';

import Header from '@/components/wrappers/Header';
import CWrapper from '@/components/wrappers/component-wrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function CampaignDetailPage() {
  // Replace with actual data fetch or props
  const campaign = {
    title: 'Monsoon Feeding Drive',
    image: 'https://images.unsplash.com/photo-1711693425960-d4ff44772e51?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:
      'Animal welfare is not just about animals. It is about us, our living conditions, our children, our earth. Cruelty to animals has a significant and irreversible impact on peaceful societies, human health, the economy, and the environment.',
    description: `In this campaign, we aim to make cow welfare simpler and more accessible. Through a network of shelters, feed distribution, medical care, and public education, we strive to reduce suffering and promote compassion for these gentle beings.`,
    objectives: [
      'Rescue and shelter stray and injured cows',
      'Provide regular medical check-ups and vaccination',
      'Distribute free fodder in underserved regions',
      'Raise awareness about the importance of cow care and protection',
    ],
    howToHelp: [
      {label: 'Donate', href: '/donate'},
      {label: 'Volunteer', href: '/volunteer'},
      {label: 'Spread Awareness', href: '/share-campaign'}
    ],
    raised: 75000,
    goal: 150000,
    updates: [
      {
        date: '2025-06-10',
        title: 'Foundation Laid in Local Shelter',
        content:
          'With generous donations, we established a temporary shelter for 50 cows in the first week.',
      },
      {
        date: '2025-06-25',
        title: 'First Vaccination Camp',
        content:
          'Over 200 cows vaccinated in partnership with local vets — a major step towards disease prevention.',
      }
    ]
  };

  const percentRaised = Math.min(
    100,
    Math.round((campaign.raised / campaign.goal) * 100)
  );

  return (
    <CWrapper>
      <div className=" text-gray-900">
        {/* Header */}
        <Header
          title={campaign.title}
          subtitle="Join us in simplifying and strengthening cow welfare in communities across India."
        />

        {/* Hero Image & Intro */}
        <section className="w-full h-96 relative overflow-hidden">
          <Image
            src={campaign.image}
            alt={campaign.title}
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </section>
        <section className="py-12 px-6 md:px-20 lg:px-36 dark:text-white text-lg space-y-6">
          <p>{campaign.intro}</p>
          <p>{campaign.description}</p>

          {/* Objectives */}
          <h2 className="text-2xl font-semibold dark:text-teal-500 text-teal-700 mt-10">
            Campaign Objectives
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {campaign.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>

          {/* Progress */}
          <div className="mt-10 border-t pt-6">
            <div className="h-4 w-full bg-teal-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600"
                style={{ width: `${percentRaised}%` }}
              ></div>
            </div>
            <p className="text-sm dark:text-white text-gray-600 mt-2">
              ₹{campaign.raised.toLocaleString()} raised of ₹
              {campaign.goal.toLocaleString()} goal ({percentRaised}%)
            </p>
          </div>

          {/* How to Help */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">
              How You Can Help
            </h2>
            <div className="flex flex-wrap gap-4">
              {campaign.howToHelp.map((item) => (
                <Link href={item.href} key={item.label} passHref>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-full transition">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Updates */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold dark:text-teal-500 text-teal-700 mb-6">
              Latest Updates
            </h2>
            <div className="space-y-8">
              {campaign.updates.map((u, i) => (
                <div key={i} className="space-y-1">
                  <p className="dark:text-white text-gray-600 text-sm">{u.date}</p>
                  <p className="font-semibold dark:text-teal-500 text-teal-800">{u.title}</p>
                  <p className="dark:text-white text-gray-700">{u.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Share & Social */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Spread the Word
            </h3>
            <div className="flex justify-center space-x-4">
              {/* Replace with real share buttons */}
              <button className="text-teal-600 hover:text-teal-800">Facebook</button>
              <button className="text-teal-600 hover:text-teal-800">Twitter</button>
              <button className="text-teal-600 hover:text-teal-800">WhatsApp</button>
            </div>
          </div>
        </section>
      </div>
    </CWrapper>
  );
}
