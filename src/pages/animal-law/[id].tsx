"use client";

import { useEffect, useState } from "react";
import { Bookmark, Clock, Share2 } from "lucide-react";

const mockLaw = {
  title: "Prevention of Cruelty to Animals Act, 1960",
  updated: "July 1, 2025",
  sections: [
    {
      heading: "Overview",
      content: `The Prevention of Cruelty to Animals Act, 1960 is India's primary law to prevent unnecessary pain or suffering to animals. It sets basic standards for animal care and penalizes cruelty.`,
    },
    {
      heading: "Key Provisions",
      content: `- Defines cruelty and establishes legal boundaries\n- Sets up the Animal Welfare Board of India\n- Penalizes acts like beating, kicking, overloading animals\n- Regulates experimentation on animals\n- Enables further rules like transport and slaughterhouse regulations`,
    },
    {
      heading: "Punishments",
      content: `- First offense: Fine up to ₹50\n- Repeat offense: Fine ₹25-₹100 or up to 3 months imprisonment\n- These fines are considered outdated and insufficient by many activists.`,
    },
    {
      heading: "Limitations & Future",
      content: `The act is outdated in parts and lacks strong deterrents. Amendments have been proposed to increase fines and enhance enforcement mechanisms.`,
    },
  ],
};

export default function LawReader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bookmarked, setBookmarked] = useState(false);
  const readingTime = Math.ceil(
    mockLaw.sections.reduce((acc, sec) => acc + sec.content.split(" ").length, 0) / 180
  );

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // Simulate save to localStorage or backend
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-16 text-gray-800">
      {/* Table of Contents */}
      <aside className="lg:w-1/4 hidden lg:block sticky top-28 self-start">
        <div className="bg-white shadow rounded-xl border border-teal-100 p-4">
          <h3 className="text-lg font-semibold mb-2 text-teal-700">On this page</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {mockLaw.sections.map((section, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="hover:text-teal-600">
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 w-full">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 font-raleway mb-4">
            {mockLaw.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </span>
            <span>Last updated on {mockLaw.updated}</span>
            <button
              onClick={handleBookmark}
              className="ml-auto text-teal-600 hover:text-teal-800 flex items-center gap-1"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </button>
            <button className="text-gray-500 hover:text-teal-700 flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Article Sections */}
        <div className="space-y-12 bg-white p-8 rounded-2xl shadow-md leading-relaxed">
          {mockLaw.sections.map((section, i) => (
            <section key={i} id={`section-${i}`}>
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">{section.heading}</h2>
              <p className="text-gray-700 whitespace-pre-wrap">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Navigation (optional if multiple laws exist) */}
        <div className="mt-12 flex justify-between text-sm text-teal-600">
          <a href="/animal-laws/abc-program" className="hover:underline">
            ← ABC Rules, 2001
          </a>
          <a href="/animal-law/wildlife-protection" className="hover:underline">
            Wildlife Protection Act, 1972 →
          </a>
        </div>
      </main>
    </div>
  );
}
