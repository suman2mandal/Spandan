'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-teal-50 dark:bg-[#0f172a] text-teal-900 dark:text-white">
      <div className="max-w-md w-full text-center bg-white dark:bg-[#1e293b] shadow-xl rounded-2xl p-8 border border-teal-100 dark:border-slate-700">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Your application has been received. Our team will review it and get back to you shortly.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-xl hover:bg-teal-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
