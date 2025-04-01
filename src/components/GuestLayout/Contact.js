import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <p className="text-center">
        We’re here to help. If you have questions, need guidance, or just want to learn more, reach out to us.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <FaMapMarkerAlt className="me-2 text-primary" /> Location
              </h5>
              <p className="card-text">Based in NYC</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <FaEnvelope className="me-2 text-primary" /> Email
              </h5>
              <p className="card-text">
                <a href="mailto:atturningpoint@gmail.com" className="text-decoration-none">
                  atturningpoint@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <FaPhone className="me-2 text-primary" /> Phone
              </h5>
              <p className="card-text">
                <a href="tel:7164797905" className="text-decoration-none">
                  716-479-7905
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <FaGlobe className="me-2 text-primary" /> Website
              </h5>
              <p className="card-text">
                <a href="https://asylumapp.netlify.app" className="text-decoration-none">URL</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>You can also contact us through our online form, and we’ll get back to you as soon as possible.</p>
        <p className="fw-bold">You are not alone in this journey—we are here to support you every step of the way.</p>
      </div>
    </div>
  );
}
