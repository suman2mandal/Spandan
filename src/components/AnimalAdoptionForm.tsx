"use client";
import { useState } from "react";
import AnimalSelector from "./animal-selector";



export default function AnimalAdoptionForm(){
      const [submitted, setSubmitted] = useState(false);

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Add logic here (API / email / db)
            setSubmitted(true);
        };
    return(
        <>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className=" dark:bg-gray-700 p-8 rounded-2xl border dark:border-gray-900 border-gray-200 shadow-xl space-y-6"
          >
            <h2 className="text-2xl font-bold text-teal-900 dark:text-teal-500 text-center mb-4">Adoption Form</h2>

            <div>
              <label className="block text-teal-900 dark:text-teal-500 font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700 dark:text-white"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-teal-900 dark:text-teal-500 font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-200 rounded-md text-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-teal-900 dark:text-teal-500 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91..."
                  className="w-full p-3 border border-gray-200 rounded-md text-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div> 
              <label className="block text-teal-900 dark:text-teal-500 font-medium mb-1">Address</label>
              <textarea
                required
                placeholder="Your full address"
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700 dark:text-white"
              />
            </div>
            <AnimalSelector/>

            <div>
              <label className="block text-teal-900 dark:text-teal-500 font-medium mb-1">Why do you want to adopt?</label>
              <textarea
                required
                rows={3}
                placeholder="Write briefly..."
                className="w-full p-3 border border-gray-200 rounded-md text-gray-700 dark:text-white"
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
        </>
    )
}