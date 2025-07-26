'use client';
import React, { useState } from 'react';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      setMessage('✅ Account created successfully! You can now log in.');
    } catch (err) {
      if (err instanceof Error) {
        setMessage(`❌ ${err.message}`);
      } else {
        setMessage('❌ An unknown error occurred');
      }
    }
  };
  
  const messageClasses = message ? (message.startsWith('✅') ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300') : '';

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-600 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-12 order-1 md:order-1">
          <div className="w-full max-w-md">
            <h2 className="text-5xl font-bold text-white mb-4">One of Us?</h2>
            <p className="text-gray-300 text-lg mb-8">If you already have an account, just sign in. We've missed you!</p>
            <a href="/login" className="inline-block px-10 py-3 font-semibold bg-white/10 border-2 border-white/20 text-white rounded-full backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105">Login</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 order-2 md:order-2">
          <div className="w-full max-w-md space-y-8 rounded-2xl bg-gray-900/60 p-8 shadow-2xl backdrop-blur-lg border border-gray-700/50">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Create Account</h2>
              <p className="mt-2 text-gray-400">Join us today! It takes only a few seconds.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input id="name" name="name" type="text" required placeholder=" " value={form.name} onChange={handleChange} className="peer block w-full appearance-none rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"/>
                <label htmlFor="name" className="absolute top-3 left-4 origin-[0] -translate-y-7 scale-75 transform text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-400">Full Name</label>
              </div>
              <div className="relative">
                <input id="email" name="email" type="email" required placeholder=" " value={form.email} onChange={handleChange} className="peer block w-full appearance-none rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"/>
                <label htmlFor="email" className="absolute top-3 left-4 origin-[0] -translate-y-7 scale-75 transform text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-400">Email Address</label>
              </div>
              <div className="relative">
                <input id="password" name="password" type="password" required placeholder=" " value={form.password} onChange={handleChange} className="peer block w-full appearance-none rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"/>
                <label htmlFor="password" className="absolute top-3 left-4 origin-[0] -translate-y-7 scale-75 transform text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-400">Password</label>
              </div>
              <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">Create Account</button>
              {message && (<div className={`rounded-lg p-3 text-center text-sm font-medium ${messageClasses}`}><p>{message}</p></div>)}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}