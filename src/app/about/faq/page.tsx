"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import ContactSupport from "@/components/contact-support";

type FAQ = {
  question: string;
  answer: ReactNode;
  category: string;
};


const faqData: FAQ[] = [
  {
    question: "How do I create an account?",
    answer: (
      <p>
        To create an account, click on the &quot;Sign Up&quot; button at the top right corner of our website.
        You&apos;ll need to provide your email address, create a password, and fill in some basic
        information. After verification, your account will be ready to use.
      </p>
    ),
    category: "Account",
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        <p className="mb-3">
          We accept all major credit cards including Visa, MasterCard, American Express, and Discover.
          We also support payments through PayPal and bank transfers for certain plans.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Credit/Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfers (for annual plans)</li>
        </ul>
      </>
    ),
    category: "Billing",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: (
      <p>
        Yes, you can cancel your subscription at any time. If you cancel during your billing period,
        you&apos;ll continue to have access to our services until the end of that period. We don&apos;t charge
        any cancellation fees.
      </p>
    ),
    category: "Billing",
  },
  {
    question: "How do I reset my password?",
    answer: (
      <>
        <p className="mb-3">To reset your password:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Go to the login page and click &quot;Forgot password&quot;</li>
          <li>Enter the email address associated with your account</li>
          <li>Check your email for a password reset link</li>
          <li>Click the link and follow the instructions to create a new password</li>
        </ol>
      </>
    ),
    category: "Account",
  },
  {
    question: "Is there a mobile app available?",
    answer: (
      <p>
        Yes! We have mobile apps available for both iOS and Android devices. You can download them
        from the App Store or Google Play Store. All your data will sync automatically between the
        web version and mobile apps.
      </p>
    ),
    category: "Features",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [searchTerm, setSearchTerm] = useState("");

  // const filteredFAQs = faqData.filter((faq) =>
  //   faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredFAQs = faqData.filter((faq) =>
  (selectedCategory === "All" || faq.category === selectedCategory) &&
  faq.question.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our products and services.
        </p>
      </div>

      {/* Search */}
      <div className="mb-10">
        <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["All", "Account", "Billing", "Features", "Support"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full transition border ${
              cat === selectedCategory
                ? "bg-teal-600 text-white hover:bg-teal-700"
                : "bg-white text-teal-600 border-teal-600 hover:bg-teal-50"
            }`}
          >
          {cat}
          </button>
        ))}
      </div>


      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <ChevronDown
                size={20}
                className={`text-teal-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-600 animate-fade-in">{faq.answer}</div>
            )}
          </div>
        ))}
        
      </div>
      {/* Contact Support Button */}
        <ContactSupport/>
    </div>
  );
}
