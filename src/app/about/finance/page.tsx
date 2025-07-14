'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const donations = [
  // ✅ Extend this array to test pagination (at least 15+ entries recommended)
  {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹1500',
    date: 'Jul 02, 2025',
    status: 'Verified',
    method: 'UPI',
  },
  {
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹750',
    date: 'Jul 01, 2025',
    status: 'Recurring',
    method: 'Bank Transfer',
  },
  {
    name: 'Carlos Reyes',
    image: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹250',
    date: 'Jun 30, 2025',
    status: 'Pending',
    method: 'Cash',
  },
  // 👇 Add more entries here for testing pagination
  {
    name: 'Priya Ghosh',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹1800',
    date: 'Jun 29, 2025',
    status: 'Verified',
    method: 'UPI',
  },
  {
    name: 'Akash Das',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹600',
    date: 'Jun 28, 2025',
    status: 'Recurring',
    method: 'UPI',
  },
  {
    name: 'Ravi Kumar',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹900',
    date: 'Jun 27, 2025',
    status: 'Pending',
    method: 'Cash',
  },
  {
    name: 'Meera Sen',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹1000',
    date: 'Jun 26, 2025',
    status: 'Verified',
    method: 'Bank Transfer',
  },
  {
    name: 'Ankit Roy',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹500',
    date: 'Jun 25, 2025',
    status: 'Pending',
    method: 'Cash',
  },
  {
    name: 'Suman Mandal',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹700',
    date: 'Jun 24, 2025',
    status: 'Verified',
    method: 'UPI',
  },
  {
    name: 'Sudipta Pal',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
    amount: '₹850',
    date: 'Jun 23, 2025',
    status: 'Recurring',
    method: 'Bank Transfer',
  },
];

const ITEMS_PER_PAGE = 6;

export default function DonationList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(donations.length / ITEMS_PER_PAGE);
  const paginatedData = donations.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-teal-600 mb-8 text-center font-raleway">
          Recent Donations
        </h2>

        <div className="shadow-md rounded-2xl overflow-hidden border border-gray-100 bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-teal-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-700 uppercase tracking-wider">Donor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-700 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-700 uppercase tracking-wider">Method</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-teal-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedData.map((donation, index) => (
                <tr key={index} className="hover:bg-teal-50 transition">
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image
                          src={donation.image}
                          alt={donation.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-800 font-medium">{donation.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-700">{donation.amount}</td>
                  <td className="px-6 py-5 text-gray-700">{donation.date}</td>
                  <td className="px-6 py-5 text-gray-700">{donation.method}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        donation.status === 'Verified'
                          ? 'bg-green-100 text-green-700'
                          : donation.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 bg-gray-50 flex items-center justify-between text-sm text-gray-500 rounded-b-2xl">
            <span>
              Page {page} of {totalPages}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className={`px-3 py-1 rounded ${
                  page === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                } transition text-gray-700`}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className={`px-3 py-1 rounded ${
                  page === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
                } transition text-gray-700`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
