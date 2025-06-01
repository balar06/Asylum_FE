import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {FaQuestionCircle , FaTachometerAlt, FaUserCircle, FaCog, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import { API_ENDPOINTS } from '../../constants/api';

export default function UserLayout({ children }) {
  const navigate = useNavigate();

  const logout = async () => {
    const logoutData = {
      userName: localStorage.getItem('userName'),
      emailId: localStorage.getItem('userEmail'),
      token: localStorage.getItem('token'),
    };
  
    try {
      const response = await axios.post(API_ENDPOINTS.LOGOUT, logoutData);
      if (response.status === 200) {
        // Clear local storage and redirect to home page
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPhone');
        navigate('/');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 px-2 py-3">
            <span className="text-xl font-bold text-blue-600">Logo</span>
          </div>

          {/* Navigation */}
          <ul className="mt-4 space-y-1">
            <li onClick={() => navigate('/screener/')} 
              className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaQuestionCircle className="text-gray-600" /> Screener
            </li>
            <div className="border-t pt-3"></div>
            <li onClick={() => navigate('/dashboard/')}  
              className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaTachometerAlt className="text-gray-600" /> Dashboard
            </li>
            <div className="border-t pt-3"></div>
            <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaFileAlt className="text-gray-600" /> Documents
            </li>
            <div className="border-t pt-3"></div>
          </ul>
        </div>

        {/* Profile Section */}
        <div>
          <div className="border-t pt-3"></div>
          {/* Settings */}
          <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md">
            <FaCog className="text-2xl text-gray-600" />
            <span className="text-gray-800">Setting</span>
          </div>
          <div className="border-t pt-3"></div>
          {/* User Info */}
          <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md">
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="text-gray-800">User Name</span>
          </div>
          <div className="border-t pt-3"></div>
          {/* Logout Button */}
          <div
            onClick={logout}
            className="flex items-center gap-2 p-2 cursor-pointer bg-red-100 hover:bg-red-200 rounded-md mb-2"
          >
            <FaSignOutAlt className="text-2xl text-red-600" />
            <span className="text-red-700 font-medium">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
      <div className="flex-grow p-4">
        {children || <Outlet />}
      </div>
      </main>
    </div>
  );
}
