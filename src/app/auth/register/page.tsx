'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', { name, email, password });
      router.push('/auth/login');
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Registration failed');
      } else {
        setError('Unexpected error occurred');
      }
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Register</h1>

      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 mb-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-2"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 w-full">
        Register
      </button>
    </div>
  );
}
