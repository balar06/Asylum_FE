import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaUserCircle, FaCog, FaFileAlt  } from 'react-icons/fa';


export default function UserLayout() {
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
            <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaTachometerAlt className="text-gray-600" /> Dashboard
            </li>
          </ul>
          <ul className="mt-4 space-y-1">
            <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaFileAlt  className="text-gray-600" /> Documents
            </li>
          </ul>
        </div>

        {/* Profile Section */}
      
        {/* Profile Section */}
        <div>
        <div className="border-t pt-3"></div>
          <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md">
            <FaCog className="text-2xl text-gray-600" />
            <span className="text-gray-800">Setting</span>
          </div>
          <div className="border-t pt-3"></div>
          <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md">
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="text-gray-800">User Name</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
