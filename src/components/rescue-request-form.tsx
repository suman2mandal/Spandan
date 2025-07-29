// RescueRequestForm.tsx
'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function RescueRequestForm() {
  const user = useSelector((state: RootState) => state.user.user);
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    location: '',
    description: '',
    phone: '',
    file: null as File | null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const payload = new FormData();
    payload.append('location', formData.location);
    payload.append('description', formData.description);
    payload.append('phone', formData.phone);
    if (formData.file) payload.append('file', formData.file);

    try {
      const res = await axios.post('/api/rescue-request', payload, {
        headers: {
          Authorization: `Bearer ${session?.user}`, // if you're using token here
        },
      });

      setMessage('Rescue request submitted successfully.');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage('Failed to submit rescue request.');
    }
  };

  if (!user) {
    return (
      <section className="py-8 lg:py-12 text-center">
        <p className="text-lg font-medium text-gray-700 dark:text-white">
          Please <a href="/auth/login" className="text-teal-600 underline">log in</a> to submit a rescue request.
        </p>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-12">
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
            <label className="block text-sm font-medium mb-1">📞 Phone / WhatsApp Number</label>
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
  );
}
