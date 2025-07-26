'use client';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

// --- TypeScript Interfaces ---
interface UserData {
  name: string;
  email: string;
}

interface LoginResponse {
  message: string;
  token: string;
  user: UserData;
}

// --- Main App Component (Entry Point) ---
// This component will manage the overall authentication state.
export default function App() {
  const [user, setUser] = useState<LoginResponse | null>(null);
  const isAuthenticated = user !== null;

  // This function will be called by the LoginForm on a successful login
  const handleLoginSuccess = (userData: LoginResponse) => {
    setUser(userData);
    // In a real app, you would store the token securely
    // For example: localStorage.setItem('authToken', userData.token);
  };

  // This function will be called by the Dashboard to log out
  const handleLogout = () => {
    setUser(null);
    // localStorage.removeItem('authToken');
  };

  // The App component decides which view to show:
  // - If authenticated, show the Dashboard.
  // - If not, show the LoginForm.
  if (isAuthenticated) {
    return <Dashboard  />;
  }

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
}


// --- Login Form Component ---
// This component is responsible for the login UI and API call.
interface LoginFormProps {
  onLoginSuccess: (userData: LoginResponse) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // It's important to await res.json() to get the body
      const data = await res.json();

      if (!res.ok) {
        // Use the error message from the backend response if it exists
        throw new Error(data.error || 'Login failed. Please check your credentials.');
      }
      
      // On success, call the function passed from the parent (App) component
      onLoginSuccess(data as LoginResponse);

    } catch (err) {
      if (err instanceof Error) {
        setMessage(`❌ ${err.message}`);
      } else {
        setMessage('❌ An unknown error occurred');
      }
    } finally {
        setIsLoading(false);
    }
  };
  
  // Dynamically set message styles based on success or error
  const messageClasses = message ? (message.startsWith('✅') ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300') : '';

  return (
    <main className="relative min-h-screen w-full bg-gray-950 text-white overflow-hidden">
        {/* Custom animations for the background blobs */}
        <style>{`
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
                animation: blob 7s infinite;
            }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }
        `}</style>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-600 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 order-2 md:order-1">
          <div className="w-full max-w-md space-y-8 rounded-2xl bg-gray-900/60 p-8 shadow-2xl backdrop-blur-lg border border-gray-700/50">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Welcome Back</h2>
              <p className="mt-2 text-gray-400">Enter your credentials to access your account.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input id="email" name="email" type="email" required placeholder=" " value={form.email} onChange={handleChange} className="peer block w-full appearance-none rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 disabled:opacity-50" disabled={isLoading}/>
                <label htmlFor="email" className="absolute top-3 left-4 origin-[0] -translate-y-7 scale-75 transform text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-400">Email Address</label>
              </div>
              <div className="relative">
                <input id="password" name="password" type="password" required placeholder=" " value={form.password} onChange={handleChange} className="peer block w-full appearance-none rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 shadow-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 disabled:opacity-50" disabled={isLoading}/>
                <label htmlFor="password" className="absolute top-3 left-4 origin-[0] -translate-y-7 scale-75 transform text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-blue-400">Password</label>
              </div>
              <div className="flex items-center justify-end text-sm"><a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a></div>
              <button type="submit" disabled={isLoading} className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 py-3 px-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed">
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
              {message && (<div className={`rounded-lg p-3 text-center text-sm font-medium ${messageClasses}`}><p>{message}</p></div>)}
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-12 order-1 md:order-2">
          <div className="w-full max-w-md">
            <h2 className="text-5xl font-bold text-white mb-4">First Time?</h2>
            <p className="text-gray-300 text-lg mb-8">Create an account to join our community. It's quick and easy.</p>
            <a href="/signup" className="inline-block px-10 py-3 font-semibold bg-white/10 border-2 border-white/20 text-white rounded-full backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105">Sign Up</a>
          </div>
        </div>
      </div>
    </main>
  );
}