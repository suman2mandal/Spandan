'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/userSlice';
import Image from 'next/image';

export default function DashboardProfile() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  
  useEffect(() => {
    // If session is ready and user exists in session but not in Redux, log in
    if (
      status === 'authenticated' &&
      session?.user &&
      !user // only dispatch if Redux doesn't already have user
    ) {
      dispatch(
        login({
          name: session.user.name ?? '',
          email: session.user.email ?? '',
          id: session.user.id ?? '',
          image: session.user.image ?? '',
        })
      );
    }
  }, [session, status, dispatch, user]);

  useEffect(() => {
    // If session status is unauthenticated, redirect
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') return null; // or show spinner
  if (!user) return null;


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
            <Image
              src={user.image || '/default-avatar.png'}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {/* Stats Section */}
          <div className="col-span-2 bg-white shadow rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Your Activity</h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Total Rescues</span>
                <span className="font-medium">12</span>
              </li>
              <li className="flex justify-between">
                <span>Reported Cases</span>
                <span className="font-medium">5</span>
              </li>
              <li className="flex justify-between">
                <span>Donations Made</span>
                <span className="font-medium">₹1500</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-2xl p-6 hover:bg-blue-50 cursor-pointer transition" onClick={() => router.push('/rescue-history')}>
            <h3 className="text-lg font-semibold">View Rescue History</h3>
            <p className="text-sm text-gray-600">Check your past rescue reports and statuses.</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6 hover:bg-blue-50 cursor-pointer transition" onClick={() => router.push('/report-rescue')}>
            <h3 className="text-lg font-semibold">Report a Rescue</h3>
            <p className="text-sm text-gray-600">Submit details of a new rescue or incident.</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6 hover:bg-blue-50 cursor-pointer transition" onClick={() => router.push('/donations')}>
            <h3 className="text-lg font-semibold">Your Donations</h3>
            <p className="text-sm text-gray-600">See your contribution history and receipts.</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6 hover:bg-blue-50 cursor-pointer transition" onClick={() => router.push('/edit-profile')}>
            <h3 className="text-lg font-semibold">Edit Profile</h3>
            <p className="text-sm text-gray-600">Update your name, email, and profile image.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
