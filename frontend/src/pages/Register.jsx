import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.querySelector('#fullName').value;
    const email = e.target.querySelector('#email').value;
    const password = e.target.querySelector('#password').value;
    console.log('Register attempt:', { fullName, email, password });
    // Add navigation logic here if registration is successful
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e6fafa] to-[#d1e7dd]">
      <div className="p-8 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-2 text-center text-teal-700">Patient Register</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Create your account to get started
        </p>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label htmlFor="fullName" className="block text-sm text-gray-700 mb-1 text-left">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="w-full p-2 bg-teal-50 border border-teal-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 bg-teal-50 border border-teal-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1 text-left">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 bg-teal-50 border border-teal-200 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center p-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200"
          >
            Register <span className="ml-2">→</span>
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          Are you a doctor?{" "}
          <Link to="/doctorregister" className="text-green-500 hover:underline">
            Register as Doctor
          </Link>
        </p>
      </div>
    </div>
  );
}