import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <main className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg my-6 mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
