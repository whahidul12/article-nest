'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock Validation
    if (email === 'admin@example.com' && password === '123456') {
      // Set cookie
      Cookies.set('auth', 'true', { expires: 1 }); // Expires in 1 day
      
      toast.success('Login Successful!');
      router.push('/items');
    } else {
      toast.error('Invalid credentials. Try admin@example.com / 123456');
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="123456"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}