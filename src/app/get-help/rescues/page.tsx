'use client';

import CWrapper from '@/components/wrappers/component-wrapper';
import Heading from '@/components/wrappers/Header';
// ...existing code...
import React, { useState } from 'react';

export default function RescueHelpPage() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    file: null as File | null,
    name: '',
    phone: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('✅ Thank you! We will contact you within 1–3 hours if your request falls within our area & capacity.');
  };

  return (
    <CWrapper>
    <main className="dark:text-white text-teal-900 min-h-screen">
      {/* Hero Section */}
      <Heading
        title="Rescue a Street Animal in Need"
        subtitle="Injured, sick, or suffering animal near you? Let us know — we’re here to help them recover and live."
      />

      {/* Emergency Contact Section */}
      <section className="bg-red-100 border border-red-400 text-red-800 px-6 py-6 rounded-md max-w-4xl mx-auto my-8">
        <h2 className="text-xl font-semibold">🚨 Emergency? Act Now!</h2>
        <p className="text-sm mt-1">If you spot an animal in a life-threatening situation (severe injury, immobility, extreme bleeding, etc.), please:</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-sm">
          <li>📞 Call: <a href="tel:+91XXXXXXXXXX" className="underline">+91-XXXXXXXXXX</a></li>
          <li>💬 WhatsApp: <a href="https://wa.me/+91XXXXXXXXXX" className="underline">+91-XXXXXXXXXX</a></li>
          <li>🕒 Active between 9:00 AM – 9:00 PM</li>
        </ul>
      </section>

      {/* What We Can Help With */}
      {/* What We Can Help With */}
<section className="lg:py-12 py-8">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Text */}
    <div>
      <h2 className="text-3xl font-bold mb-4 dark:text-white text-teal-800">💚 What Help Spandan Can Provide</h2>
      <ul className="space-y-4 dark:text-gray-300 text-gray-800 text-lg">
        <li>🩹 <strong>Injured Animal Rescue</strong> – Dogs hit by vehicles, wounded, or suffering from skin disease.</li>
        <li>🏥 <strong>Medical Aid</strong> – We arrange treatments, vaccinations, surgeries, and long-term care if needed.</li>
        <li>🐶 <strong>Safe Shelter</strong> – Temporary recovery spaces for animals post-treatment.</li>
        <li>🚨 <strong>Cruelty Cases</strong> – We assist in reporting and protecting animals from human abuse.</li>
        <li>✂️ <strong>ABC Program</strong> – Animal Birth Control (sterilization) for strays to manage populations.</li>
      </ul>
    </div>

    {/* Image */}
    <div className="w-full h-80 bg-cover bg-center rounded-xl shadow-md" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584015437353-4dd19e892ae9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div>
  </div>
</section>


{/* How It Works */}
<section className="lg:py-12 py-8">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
    {/* Text */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl font-bold dark:text-white text-teal-900 mb-6">📋 How the Rescue Process Works</h2>
      <ol className="list-decimal ml-6 dark:text-gray-300 text-gray-800 space-y-3 text-lg">
        <li>📥 You submit the form or contact us via WhatsApp.</li>
        <li>🔎 We assess priority, availability & location.</li>
        <li>🚗 Team or volunteer reaches to rescue.</li>
        <li>💉 Medical treatment at vet or home care.</li>
        <li>👣 Follow-up visits or shelter support if needed.</li>
      </ol>
    </div>

    {/* Image */}
    <div className="w-full h-80 bg-cover bg-center rounded-xl shadow-md" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1470&q=80')` }}></div>
  </div>
</section>


{/* Who Can Submit */}
<section className="lg:py-12 py-8">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-4 dark:text-white text-teal-800">🤝 Who Can Submit a Rescue Request?</h2>
      <p className="text-lg mb-4 dark:text-gray-300 text-gray-800">
        Anyone with compassion — whether you're a local resident, student, vendor, animal lover, or just passing by — you can take action.
      </p>
      <p className="text-sm dark:text-gray-300 text-gray-600 italic">
        There's no requirement for previous experience. If you spot suffering, help them by reaching out to us.
      </p>
    </div>
    {/* Image */}
    <div className="w-full h-80 bg-cover bg-center rounded-xl shadow-md" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552410659-aff5cdb1b504?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div>

    {/* Text */}
    
  </div>
</section>


      {/* Rescue Request Form */}
      <section className=" lg:py-12 py-8">
        <div className="dark:bg-gray-700 shadow-md rounded-lg p-6 mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">📨 Rescue Request Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">📍 Location of Animal</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g. Behala, South Kolkata"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">📝 Description of Issue</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Describe the animal's condition or the situation."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">📸 Upload Image/Video (Optional)</label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">👤 Your Name (Optional)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">📞 Phone / WhatsApp Number (Required)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">✉️ Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Submit Rescue Request
            </button>
          </form>

          {message && (
            <div className="mt-4 text-green-700 font-medium text-center bg-green-100 border border-green-300 px-4 py-2 rounded">
              {message}
            </div>
          )}
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-8 text-center dark:text-white text-teal-900">
        <h2 className="text-2xl font-bold mb-2">Together, we can save lives</h2>
        <p className="max-w-2xl mx-auto dark:text-gray-300 text-gray-800">
          Your action today could be the reason a suffering animal gets another chance. Thank you for caring enough to help.
        </p>
      </section>
    </main>
    </CWrapper>
  );
}
