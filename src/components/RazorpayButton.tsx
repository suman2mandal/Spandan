'use client';

import Script from 'next/script';
import { useState } from 'react';
import axios from 'axios';

export default function RazorpayButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/razorpay', { amount: 500 }); // Amount in INR

      const { id: order_id, amount, currency } = res.data;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount,
        currency,
        name: 'Spandan NGO',
        description: 'Donation Payment',
        order_id,
        handler: function (response: any) {
          alert('Payment Successful!');
          console.log(response);
        },
        prefill: {
          name: 'Suman Mandal',
          email: 'suman@example.com',
          contact: '+91-xx-xxxx-xxxx',
        },
        notes: {
          address: 'Spandan NGO Office',
        },
        theme: {
          color: '#0f766e',
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment Failed:', err);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Donate ₹500'}
      </button>
    </>
  );
}
