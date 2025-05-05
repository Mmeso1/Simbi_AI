'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import '@/app/globals.css';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, assume any non-empty credentials are valid
    if (email && password) {
      router.push('/unboarding');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 to-yellow-100">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left side */}
        <div className="bg-purple-100 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-3xl font-semibold text-black">Welcome back to</h1>
          <h2 className="text-4xl font-bold text-purple-600 mt-2">SIMBI</h2>
          <Image
            src="/images/hero.png"
            alt="Simbi"
            width={200}
            height={200}
            className="mt-6"
          />
        </div>

        {/* Right side */}
        <div className="p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-lg font-semibold text-purple-700">Sign In</h3>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-gray-400 hover:text-gray-700">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}