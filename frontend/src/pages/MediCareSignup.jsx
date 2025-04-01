// MediCareSignup.js
import React, { useState } from 'react';

const MediCareSignup = () => {
  const [formData, setFormData] = useState({
    accountType: 'Patient',
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-md shadow-lg rounded-lg">
        {/* Header with logo */}
        <div className="flex items-center mb-6">
          <svg className="h-8 w-8 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <h1 className="ml-2 text-2xl font-semibold text-gray-700">MediCare</h1>
        </div>

        {/* Login/Register tabs */}
        <div className="flex mb-6 border-b border-gray-300">
          <div className="w-1/2 py-2 text-center text-sm font-medium cursor-pointer text-gray-500 hover:text-gray-700">Login</div>
          <div className="w-1/2 py-2 text-center text-sm font-medium cursor-pointer text-teal-500 border-b-2 border-teal-500">Register</div>
        </div>

        {/* Form section */}
        <h2 className="text-xl font-semibold mb-2">Create an account</h2>
        <p className="text-sm text-gray-500 mb-6">Fill in your details to register for a new account</p>

        <form onSubmit={handleSubmit}>
          {/* Account Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="patient"
                  name="accountType"
                  value="Patient"
                  checked={formData.accountType === 'Patient'}
                  onChange={handleChange}
                  className="text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor="patient" className="ml-2 text-sm text-gray-700">Patient</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="doctor"
                  name="accountType"
                  value="Doctor"
                  checked={formData.accountType === 'Doctor'}
                  onChange={handleChange}
                  className="text-teal-500 focus:ring-teal-500"
                />
                <label htmlFor="doctor" className="ml-2 text-sm text-gray-700">Doctor</label>
              </div>
            </div>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Username and Email */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter a username"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="text-teal-500 focus:ring-teal-500"
            />
            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
              I agree to the <a href="#" className="text-teal-500 hover:underline">Terms of Service</a> and <a href="#" className="text-teal-500 hover:underline">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-md text-sm font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account? <a href="#" className="text-teal-500 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default MediCareSignup;
