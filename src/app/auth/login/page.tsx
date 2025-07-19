'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    setError('');
    try {
      const response = await axios.post('/api/auth/login', { email, password });

      if (response.status === 200) {
        dispatch(login(response.data.user)); // Should be: { email, name }
        router.push('/protected');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Unexpected error occurred');
      } else {
        setError('Unexpected error occurred');
      }
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 w-full"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
