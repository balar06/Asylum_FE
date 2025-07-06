// pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { API_ENDPOINTS } from '../../constants/api';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!validateEmail(email)) {
      setLoading(false);
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, { email, password });
      const { name, phoneNumber, email: userEmail, token, userId } = response.data;

      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      localStorage.setItem('userName', name);
      localStorage.setItem('userPhone', phoneNumber);
      localStorage.setItem('userEmail', userEmail);

      navigate('/screener');
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="w-full max-w-xl min-h-[550px] flex flex-col justify-center bg-gradient-to-br from-blue-100 via-blue-250 to-blue-500 border border-white/50 rounded-2xl shadow-xl p-8 md:p-10">

  <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">Login to Asylum Portal</h2>

  {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

  <form className="space-y-5" onSubmit={handleLogin}>
    <div>
      <label className="block text-sm font-medium text-blue-900 mb-1">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-blue-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your email"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-blue-900 mb-1">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-blue-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your password"
        required
      />
    </div>

    <button
      type="submit"
      disabled={loading}
      className={`w-full py-2 rounded-md font-semibold flex items-center justify-center transition duration-200 ${
        loading
          ? 'bg-blue-300 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white'
      }`}
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin h-5 w-5 mr-2" />
          Logging in...
        </>
      ) : (
        'Login'
      )}
    </button>
  </form>

  <p className="mt-6 text-center text-sm text-blue-900">
    New to Asylum App?{' '}
    <Link to="/register" className="text-blue-700 hover:underline font-semibold">
      Register Here
    </Link>
  </p>
</div>

  );
}
