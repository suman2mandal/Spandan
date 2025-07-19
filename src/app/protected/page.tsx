'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  // Optional: Redirect unauthenticated users to login
  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) return null; // Avoid rendering "You are not logged in." briefly before redirect

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Welcome, {user.name || user.email}</h1>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        onClick={() => {
          dispatch(logout());
          router.push('/auth/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}
