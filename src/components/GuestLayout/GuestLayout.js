// components/GuestLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function GuestLayout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-blue-250 to-blue-150 flex flex-col">
      <Header />
      {/* Add margin-top to account for fixed header height */}
      <main className="flex-grow flex items-center justify-center px-4 py-10 mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
