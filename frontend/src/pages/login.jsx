import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isPatient, setIsPatient] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleToggle = (type) => {
    setIsPatient(type === 'patient');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', {
      role: isPatient ? 'patient' : 'doctor',
      email: formData.email,
      password: formData.password,
    });
    // You can add your login logic or API call here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your credentials to sign in to your account
        </p>

        <div className="flex justify-between mb-6 gap-2">
          <button
            onClick={() => handleToggle('patient')}
            className={`flex-1 py-2 rounded-md text-gray-700 font-medium transition-colors duration-200 ${
              isPatient ? 'bg-[#d1e7dd]' : 'bg-[#e6f0fa]'
            }`}
          >
            Patient
          </button>
          <button
            onClick={() => handleToggle('doctor')}
            className={`flex-1 py-2 rounded-md text-gray-700 font-medium transition-colors duration-200 ${
              !isPatient ? 'bg-[#d1e7dd]' : 'bg-[#e6f0fa]'
            }`}
          >
            Doctor
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-2 bg-[#f0f4ff] border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1 text-left">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full p-2 bg-[#f0f4ff] border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center p-3 bg-[#ff9500] text-white rounded-md hover:bg-[#e68600] transition-colors duration-200"
          >
            Sign In <span className="ml-2">→</span>
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
