import './App.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  const { register, handleSubmit, control, trigger, formState: { errors } } = useForm({
    defaultValues: { children: [] },
  });

  const [step, setStep] = useState(1);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <Header />

        <main className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg my-8 mt-24">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="text-3xl font-bold mb-6 text-center">Fill I-589 Form</h1>
                <div className="mb-4 text-center text-gray-600">Step {step} of 4</div>
                {/* Add your form steps here */}
              </>
            } />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
