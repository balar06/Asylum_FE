import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 text-gray-600 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Asylum Application Portal. All rights reserved.
      </div>
    </footer>
  );
}
