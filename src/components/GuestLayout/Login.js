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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

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
      const response = await axios.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });

      const { name, phoneNumber, email: userEmail, token, userId } = response.data;

      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      localStorage.setItem('userName', name);
      localStorage.setItem('userPhone', phoneNumber);
      localStorage.setItem('userEmail', userEmail);

      console.log('Login successful:', response.data);
      navigate('/screener');
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login to Asylum Portal</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" disabled={loading}
            className={`w-full flex items-center justify-center py-2 rounded-md transition duration-200 ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 text-white'
          }`}
            >
        {loading ? (
          <>
          <FaSpinner className="animate-spin h-5 w-5 text-white mr-2" />
          Logging in...
          </>
          ) : ('Login'
            )}
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          New to Asylum App?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Register Here
          </Link>
        </p>

      </div>
    </div>
  );
}
