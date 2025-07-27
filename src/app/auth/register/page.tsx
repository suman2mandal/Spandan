'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react'; // ✅ Add this at the top


export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError('');

    if (!name || !email || !password || !profileImage) {
      setError('All fields are required, including a profile image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);
    
    try {
      setLoading(true);
      await axios.post('/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      router.push('/auth/login');
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Registration failed.');
      } else {
        setError('Unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    signIn('google', { callbackUrl: '/profile' }); // or use '/dashboard' if that's your landing page
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setProfileImage(file);
          }}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          onClick={handleRegister}
          disabled={loading}
          className={`w-full py-2 text-white rounded-md ${
            loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="flex items-center gap-4 my-4">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="/auth/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
