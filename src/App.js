import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import GuestLayout from './components/GuestLayout/GuestLayout';
import UserLayout from './components/UserLayout/UserLayout';

import WhyUs from './components/GuestLayout/WhyUs';
import Industries from './components/Industries';
import About from './components/GuestLayout/About';
import Contact from './components/GuestLayout/Contact';
import Login from './components/GuestLayout/Login';
import Register from './components/GuestLayout/Register';

import Dashboard from './components/UserLayout/Dashboard';
import Screener from './components/UserLayout/Screener';

// Simulating authentication (Replace with actual logic)
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// Define PrivateRoute
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Authenticated Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserLayout>
                <Dashboard />
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/screener"
          element={
            <PrivateRoute>
              <UserLayout>
                <Screener />
              </UserLayout>
            </PrivateRoute>
          }
        />

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
