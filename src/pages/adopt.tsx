"use client";
import { useState } from "react";
import AnimalSelector from "@/components/animal-selector";

export default function AdoptionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic here (API / email / db)
    setSubmitted(true);
  };



  return (
    <main className="bg-white py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 text-center mb-6 font-raleway">
          Adopt a Street Animal
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Give a second chance to a soul that never had a first. By adopting, you’re not just saving a life — you’re gaining a loyal friend who will love you unconditionally.
        </p>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-teal-900 mb-4">Why Adopt?</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Give a home to an animal that truly needs it.</li>
              <li>Reduce the stray population through compassion.</li>
              <li>Every adoption creates space to rescue more lives.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white">
            <h3 className="text-2xl font-semibold text-teal-900 mb-4">How It Works</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>Fill out the form below with your details.</li>
              <li>Our team will reach out for verification.</li>
              <li>Meet the animal and complete adoption!</li>
            </ol>
          </div>
        </div>

        {/* Adoption Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto space-y-6"
          >
            <h2 className="text-2xl font-bold text-teal-900 text-center mb-4">Adoption Form</h2>

            <div>
              <label className="block text-teal-900 font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-teal-900 font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-200 rounded-md text-gray-700"
                />
              </div>
              <div>
                <label className="block text-teal-900 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91..."
                  className="w-full p-3 border border-gray-200 rounded-md text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-teal-900 font-medium mb-1">Address</label>
              <textarea
                required
                placeholder="Your full address"
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700"
              />
            </div>
            <AnimalSelector/>

            <div>
              <label className="block text-teal-900 font-medium mb-1">Why do you want to adopt?</label>
              <textarea
                required
                rows={3}
                placeholder="Write briefly..."
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-3 rounded-full transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-teal-700 font-medium text-lg mt-12">
            🎉 Thank you! Our team will reach out to you shortly.
          </div>
        )}
      </div>
    </main>
  );
}
