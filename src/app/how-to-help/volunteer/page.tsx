'use client';

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CWrapper from "@/components/wrappers/component-wrapper";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function VolunteerForm() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [message, setMessage] = useState('');
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !user.id) {
      toast.error('You must be logged in to submit.');
      return;
    }

    const formData = new FormData();
    formData.append('phone', phone);
    formData.append('location', location);
    formData.append('areaOfInterest', interest);
    formData.append('availability', availability);
    formData.append('whyVolunteer', message);

    const fileInput = fileRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append('file', fileInput.files[0]); // ✅ Appending file correctly
    }

    try {
      const res = await axios.post('/api/volunteer-request', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${session?.user}`, // Adjust if session.user is not a token
        },
      });

      toast.success('Volunteer application submitted!');
      router.push('/how-to-help/volunteer/thank-you');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Submission failed.');
      console.error(error);
    }
  };


  return (
    <CWrapper>
      <div className="dark:bg-gray-700 dark:border-gray-900 p-3 sm:p-8 border border-gray-200 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold dark:text-teal-500 text-teal-900 mb-6 text-center">
          Join as a Volunteer
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block dark:text-teal-500 text-teal-900 font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              value={user?.name || ''}
              disabled
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 bg-gray-100 text-gray-700 dark:text-white cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="email" className="block dark:text-teal-500 text-teal-900 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={user?.email || ''}
              disabled
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 bg-gray-100 text-gray-700 dark:text-white cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block dark:text-teal-500 text-teal-900 font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="+91-XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block dark:text-teal-500 text-teal-900 font-medium">Area of Interest</label>
            <select
              id="interest"
              required
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700 dark:text-white dark:bg-gray-700"
            >
              <option value="">Select one</option>
              <option value="rescue">Rescue Support</option>
              <option value="shelter">Shelter Care</option>
              <option value="events">Awareness & Events</option>
              <option value="others">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block dark:text-teal-500 text-teal-900 font-medium">Your Location</label>
            <input
              type="text"
              id="location"
              required
              placeholder="City, Area, Landmark..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="availability" className="block dark:text-teal-500 text-teal-900 font-medium">Availability (days or time slots)</label>
            <input
              type="text"
              id="availability"
              required
              placeholder="Weekends, Evenings, 10AM-2PM, etc."
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block dark:text-teal-500 text-teal-900 font-medium">Why do you want to volunteer?</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Share your reason or experience..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-200 p-3 text-gray-700 dark:text-white"
            ></textarea>
          </div>

          <div>
            <label htmlFor="badgeImage" className="block dark:text-teal-500 text-teal-900 font-medium">Upload Badge Image (for ID Card)</label>
            <input
              type="file"
              id="badgeImage"
              ref={fileRef}
              accept="image/*"
              className="mt-1 block w-full text-gray-700 dark:text-white"
            />
          </div>
          {/* <div>
            <label className="block text-sm font-medium mb-1">📸 Upload Image/Video (Optional)</label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600"
            />
          </div> */}

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-800 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </CWrapper>
  );
}
