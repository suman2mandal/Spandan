// 'use client';

// import CWrapper from '@/components/wrappers/component-wrapper';
// import React, { useState } from 'react';
// import Script from 'next/script';
// import { useEffect } from 'react';
// import axios from 'axios';

// export default function DonationPage() {
//   const [amount, setAmount] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [method, setMethod] = useState('UPI');
//   const [message, setMessage] = useState('');
//   const [plan, setPlan] = useState('one-time');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Thank you for your support! 🐾');
//   };

//     const loadRazorpay = () => {
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
//       amount: 50000, // ₹500
//       currency: 'INR',
//       name: 'Spandan NGO',
//       description: 'Donation',
//       handler: function (response: any) {
//         alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//         // Send response to backend if needed
//       },
//       prefill: {
//         name: 'Supporter Name',
//         email: 'supporter@example.com',
//         contact: '9999999999',
//       },
//       theme: {
//         color: '#14b8a6',
//       },
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   };

//   const createOrderAndPay = async () => {
//     const { data } = await axios.post('/api/razorpay/order', {
//       amount: 500,
//     });

//     loadRazorpay();
//   };
//   return (
//     <CWrapper>
//       <main className="text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">

//         {/* Hero Section */}
//         <section className="bg-teal-50 dark:bg-gray-700 py-20 px-6 md:px-20 text-center">
//           <h1 className="text-5xl font-bold text-teal-700 dark:text-teal-400 mb-6">Every Life Matters</h1>
//           <p className="max-w-3xl mx-auto text-lg text-teal-800 dark:text-teal-200">
//             Your donations help us rescue, treat, feed, and care for hundreds of voiceless souls every month.
//             With your support, we can continue our mission to give every street animal a safe and loving life.
//           </p>
//         </section>

//         {/* Impact Section */}
//         <section className="py-16 px-6 md:px-20 text-center">
//           <h2 className="text-3xl font-semibold text-teal-700 dark:text-teal-400 mb-10">How Your Donation Helps</h2>
//           <div className="grid md:grid-cols-3 gap-4">
//             {[
//               { amount: '₹500', desc: 'Covers basic medication and food for a rescued dog for 5 days.' },
//               { amount: '₹1000', desc: 'Supports emergency rescue and treatment of an injured animal.' },
//               { amount: '₹2500', desc: 'Funds sterilization and vaccination for 3 street dogs.' },
//             ].map(({ amount, desc }) => (
//               <div key={amount} className="bg-teal-100 dark:bg-gray-700 p-6 rounded-xl shadow">
//                 <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-2">{amount}</h3>
//                 <p className="text-teal-700 dark:text-teal-100">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Donation Plans */}
//         <section className="bg-teal-50 dark:bg-gray-700 py-20 px-6 md:px-20 text-center">
//           <h2 className="text-3xl font-semibold text-teal-700 dark:text-teal-400 mb-8">Choose a Donation Plan</h2>
//           <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
//             {[
//               { key: 'one-time', title: 'One-Time', desc: 'Donate any amount, whenever you wish.' },
//               { key: 'monthly', title: 'Monthly', desc: 'Support us monthly and save more lives long-term.' },
//               { key: 'sponsor', title: 'Sponsor', desc: 'Sponsor a specific animal or treatment program.' },
//             ].map(({ key, title, desc }) => (
//               <div key={key} className="bg-white dark:bg-gray-800 border border-teal-200 dark:border-gray-600 rounded-xl p-6 shadow-md">
//                 <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-200 mb-2">{title}</h3>
//                 <p className="text-teal-700 dark:text-teal-100 mb-4">{desc}</p>
//                 <button
//                   onClick={() => setPlan(key)}
//                   className={`px-6 py-2 rounded-full font-medium text-white ${
//                     plan === key
//                       ? 'bg-teal-700 dark:bg-teal-500'
//                       : 'bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700'
//                   }`}
//                 >
//                   Select
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Donation Form */}
//         <section className="mt-8">
//           <div className="bg-teal-50 dark:bg-gray-700 rounded-2xl shadow-xl p-3 sm:p-8 md:p-14 border border-teal-100 dark:border-gray-700">
//             <h2 className="text-4xl md:text-5xl font-semibold text-teal-700 dark:text-teal-400 mb-10 text-center font-raleway">
//               Complete Your Donation
//             </h2>

//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Name */}
//               <div className="col-span-1">
//                 <label className="block text-sm font-medium text-teal-700 dark:text-teal-300">Your Name</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                   className="mt-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="John Doe"
//                 />
//               </div>

//               {/* Email */}
//               <div className="col-span-1">
//                 <label className="block text-sm font-medium text-teal-700 dark:text-teal-300">Email Address</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="mt-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               {/* Amount */}
//               <div className="col-span-1">
//                 <label className="block text-sm font-medium text-teal-700 dark:text-teal-300">Donation Amount (INR)</label>
//                 <input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   required
//                   min="1"
//                   className="mt-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="e.g. 500"
//                 />
//               </div>

//               {/* Method */}
//               <div className="col-span-1">
//                 <label className="block text-sm font-medium text-teal-700 dark:text-teal-300">Payment Method</label>
//                 <select
//                   value={method}
//                   onChange={(e) => setMethod(e.target.value)}
//                   className="mt-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 >
//                   <option value="UPI">UPI</option>
//                   <option value="Bank Transfer">Bank Transfer</option>
//                   <option value="Card">Card</option>
//                   <option value="Cash">Cash</option>
//                 </select>
//               </div>

//               {/* Message */}
//               <div className="col-span-1 md:col-span-2">
//                 <label className="block text-sm font-medium text-teal-700 dark:text-teal-300">Message (Optional)</label>
//                 <textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   rows={4}
//                   className="mt-2 w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Leave a message of support..."
//                 />
//               </div>

//               {/* Submit */}
//               <div className="flex justify-center col-span-1 md:col-span-2 text-center mt-4">
//                 <button
//                   type="submit"
//                   className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white text-base font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
//                 >
//                   Donate Now
//                 </button>
//                 <>
//                 <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//                 <button
//                   onClick={createOrderAndPay}
//                   className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700"
//                 >
//                   Donate ₹500
//                 </button>
//               </>
//               </div>
//             </form>
//           </div>
//         </section>
//       </main>
//     </CWrapper>
//   );
// }

import RazorpayButton from '@/components/RazorpayButton';

export default function DonatePage() {
  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-semibold mb-4">Support Spandan NGO</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Your donation helps save street animals.
      </p>
      <RazorpayButton />
    </div>
  );
}
