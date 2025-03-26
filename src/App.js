import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import GuestLayout from "./components/GuestLayout/GuestLayout";
import UserLayout from "./components/UserLayout/UserLayout";
 
import WhyUs from './components/GuestLayout/WhyUs';
import Industries from './components/Industries';
import About from './components/GuestLayout/About';
import Contact from './components/GuestLayout/Contact';
import Login from './components/GuestLayout/Login';
import Register from './components/GuestLayout/Register';

import Dashboard from './components/UserLayout/Dashboard';

// 🔹 Simulating authentication (Replace with actual logic)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; 
};

// 🔹 Define PrivateRoute **ABOVE** your `App` function
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function App() {
   

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">

        <main className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg my-8 mt-24">
          <Routes>
          <Route path="/why-us" element={<GuestLayout><WhyUs /></GuestLayout>} />
          <Route path="/industries" element={<GuestLayout><Industries /></GuestLayout>} />
          <Route path="/about" element={<GuestLayout><About /></GuestLayout>} />
          <Route path="/contact" element={<GuestLayout><Contact /></GuestLayout>} />
          <Route path="/login" element={<GuestLayout><Login /></GuestLayout>} />
          <Route path="/register" element={<GuestLayout><Register /></GuestLayout>} />            
          <Route path="/dashboard" element={<UserLayout><Dashboard /></UserLayout>} />
          <Route path="/dashboard" element={<PrivateRoute><UserLayout><Dashboard /></UserLayout></PrivateRoute>} />

{/* Redirect unknown routes to login */}
<Route path="*" element={<Navigate to="/login" />} />

          </Routes>
        </main>

      </div>
    </Router>
  );
}
