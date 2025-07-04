'use client';

import React, { useState } from 'react';

export default function DonationForm() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [method, setMethod] = useState('UPI');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your support! 🐾');
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="w-full max-w-5xl mx-auto bg-teal-50 rounded-3xl shadow-xl p-10 md:p-14 border border-teal-100">
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-700 mb-10 text-center font-raleway">
          Support a Life — Donate Now 🐶🐱
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-teal-700">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="John Doe"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-teal-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="john@example.com"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-teal-700">Donation Amount (INR)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="1"
              className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="e.g. 500"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-teal-700">Payment Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="UPI">UPI</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-teal-700">Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="Leave a message of support..."
            />
          </div>

<div className="flex justify-center p-10 col-span-1 md:col-span-2 text-center mt-4">
  <button
    type="submit"
    className="bg-teal-600 hover:bg-teal-700 text-white text-base font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
  >
    Donate Now
  </button>
</div>

        </form>
      </div>
    </section>
  );
}
