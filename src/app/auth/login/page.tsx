'use client';

import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/userSlice';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError('Invalid email or password');
      return;
    }

    const session: Session | null = await getSession();

    if (result?.ok && session?.user) {
      dispatch(
        login({
          name: session.user.name ?? '',
          email: session.user.email ?? '',
          id: session.user.id ?? '',
          image: session.user.image ?? '',
        })
      );

      router.push('/profile');
    } else {
      setError('Session not found. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/profile' });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-4 my-4">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.805 10.023H12.18v3.955h5.617c-.243 1.29-.964 2.38-2.046 3.113l3.301 2.57c1.926-1.78 3.053-4.404 3.053-7.464 0-.75-.067-1.475-.2-2.174z" />
            <path d="M12.18 21.75c2.76 0 5.076-.91 6.768-2.47l-3.3-2.57c-.917.616-2.087.975-3.468.975-2.666 0-4.93-1.802-5.737-4.22H3.03v2.65A9.568 9.568 0 0012.18 21.75z" />
            <path d="M6.443 13.465a5.763 5.763 0 010-3.93V6.885H3.03a9.571 9.571 0 000 10.23l3.413-2.65z" />
            <path d="M12.18 5.505c1.505 0 2.854.518 3.917 1.533l2.935-2.935C17.254 2.385 14.938 1.5 12.18 1.5A9.57 9.57 0 003.03 6.885l3.413 2.65c.807-2.418 3.07-4.03 5.737-4.03z" />
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
