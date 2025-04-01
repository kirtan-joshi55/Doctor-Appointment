//MediCareLogin.jsx
import React, { useState } from 'react';

const MediCareLogin = () => {
  const [activeTab, setActiveTab] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <svg className="w-7 h-7 text-teal-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 13.5L12 21L4.5 13.5L6 12L12 18L18 12L19.5 13.5Z" />
          <path d="M19.5 6.5L12 14L4.5 6.5L6 5L12 11L18 5L19.5 6.5Z" />
        </svg>
        <span className="ml-2 text-xl font-semibold text-gray-800">MediCare</span>
      </div>

      {/* Login Container */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Welcome Back</h1>
        <p className="text-center text-gray-500 text-sm mt-2 mb-6">
          Enter your credentials to sign in to your account
        </p>

        {/* User Type Tabs */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-3 rounded-md text-center font-medium transition-colors ${
              activeTab === 'patient' 
                ? 'bg-teal-50 text-teal-600' 
                : 'bg-gray-100 text-gray-500'
            }`}
            onClick={() => handleTabChange('patient')}
          >
            Patient
          </button>
          <button
            className={`flex-1 py-3 rounded-md text-center font-medium transition-colors ${
              activeTab === 'doctor' 
                ? 'bg-teal-50 text-teal-600' 
                : 'bg-gray-100 text-gray-500'
            }`}
            onClick={() => handleTabChange('doctor')}
          >
            Doctor
          </button>
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md"
            />
          </div>

          <button
            type="button"
            className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-500 text-white font-medium rounded-full flex items-center justify-center mb-6 transition-colors"
          >
            Sign In
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        {/* Social Login */}
        <div className="relative text-center mb-6">
          <span className="bg-white px-2 relative z-10 text-sm text-gray-500">OR CONTINUE WITH</span>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-3 px-4 border border-gray-200 rounded-md flex items-center justify-center text-gray-700 font-medium">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>
          <button className="flex-1 py-3 px-4 border border-gray-200 rounded-md flex items-center justify-center text-gray-700 font-medium">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediCareLogin;