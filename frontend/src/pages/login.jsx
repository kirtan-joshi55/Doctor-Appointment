import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center text-2xl font-bold text-green-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEqK28hOWwCczIFo_areqwwrgU9P4JAeSdg&s"
            alt="MediCare Logo"
            className="w-10 h-10 mr-2"
          />
          MediCare
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-md">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-md">
            Register
          </button>
        </div>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg w-full max-w-md mt-12 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Sign into your account</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-left">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a
              href="/forgot-password"
              className="text-orange-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-bold hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>

        {/* Google Sign-In */}
        <div className="my-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full py-2 border rounded-md bg-white hover:bg-gray-100"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaa2hwiG4o2vVy3yYZKTBDlqkTuQ0n3KEL2w&s"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
