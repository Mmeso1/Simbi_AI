'use client';

import { useRouter } from 'next/navigation';
import Home from '@/pages/Home';

export default function NavigationPage() {
  const router = useRouter();

  const routes = [
    { name: 'Sign In', path: '/Signin' },
    { name: 'Sign Up', path: '/Signup' },
    { name: 'Home (Landing Page)', path: '/' },
  ];

  return (
    <Home />
  );
}