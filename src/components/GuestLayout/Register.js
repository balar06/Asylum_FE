import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registering:', formData);
  };

  return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register for Asylum Portal</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Confirm your password"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
      </div>
  );
}
