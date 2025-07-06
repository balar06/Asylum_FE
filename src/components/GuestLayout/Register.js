import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINTS } from '../../constants/api';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(API_ENDPOINTS.REGISTER, {
        name: formData.username,
        email: formData.email,
        phoneNo: formData.phoneNo,
        password: formData.password,
      }, { withCredentials: true });

      alert('Registration successful!');
      console.log('Registered user:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      alert('Registration failed. Please try again.'+error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="w-full max-w-xl min-h-[550px] flex flex-col justify-center bg-gradient-to-br from-blue-100 via-blue-250 to-blue-500 border border-white/50 rounded-2xl shadow-xl p-8 md:p-10">

    <h2 className="text-2xl font-bold mb-8 text-blue-900 text-center">Register for Asylum Portal</h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-blue-900 font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-blue-200 rounded-md px-4 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label className="block text-blue-900 font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-blue-200 rounded-md px-4 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-blue-900 font-medium mb-1">Phone Number</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          className="w-full border border-blue-200 rounded-md px-4 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="block text-blue-900 font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-blue-200 rounded-md px-4 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block text-blue-900 font-medium mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border border-blue-200 rounded-md px-4 py-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm your password"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="button"
          onClick={handleRegister}
          disabled={loading}
          className={`w-full flex items-center justify-center py-2 rounded-md transition duration-200 ${
            loading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white'
          }`}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin h-5 w-5 text-white mr-2" />
              Registering...
            </>
          ) : (
            'Register'
          )}
        </button>
      </div>
    </form>
  </div>
);

}
