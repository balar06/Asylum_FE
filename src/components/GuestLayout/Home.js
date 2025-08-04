import React from 'react';
import WhyUs from './WhyUs';
import About from './About';
import Contact from './Contact';
import Industries from './Industries';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h1 className="display-6 fw-bold text-primary">Welcome to Open Nest AI</h1>
          <p className="lead fst-italic text-muted">Humanitarian immigration — reimagined. Powered by AI.</p>
          <p className="fs-5">Smart tools for safe immigration journeys.</p>
          <p className="mt-3">
            We believe everyone deserves access to protection, dignity, and legal status — without fear, high costs, or confusion.
          </p>
          <p>
            Open Nest AI empowers people to file humanitarian immigration applications confidently and securely, right from their phone or computer.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a href="/register" className="btn btn-primary">Start My Application</a>
            <a href="/quiz" className="btn btn-outline-primary">Take the Quiz</a>
            <a href="/contact" className="btn btn-link">Contact Us</a>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What You Can Do With Open Nest AI</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5>📄 File with Confidence</h5>
              <p>
                Get guided help for forms like asylum (I-589), work permits (I-765), TPS, and humanitarian parole. Our AI-powered system walks you through every step.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h5>🔒 Stay Safe & Secure</h5>
              <p>
                Your information is encrypted and stored with industry-grade privacy standards — because your safety is our first priority.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h5>🧭 Understand Your Options</h5>
              <p>
                Take a free eligibility quiz to learn what immigration pathways may be available to you — in minutes.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h5>💡 No Lawyers? No Problem.</h5>
              <p>
                You don’t need to pay thousands in legal fees. We provide tools you can use yourself, with built-in error checks and plain-language instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Who Is This For?</h2>
          <ul className="fs-5">
            <li>• Individuals applying for asylum, TPS, or work authorization</li>
            <li>• Survivors of harm seeking humanitarian protection</li>
            <li>• Immigrants who need a simple, safe path to file forms</li>
            <li>• Nonprofits helping immigrant communities</li>
            <li>• Lawyers looking to streamline client intake</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <ol className="fs-5">
            <li><strong>Take a Quiz:</strong> Answer a few questions to find out which forms apply to your situation.</li>
            <li><strong>Get Step-by-Step Help:</strong> Our system guides you through the application — with tips, reminders, and explanations.</li>
            <li><strong>Review & File:</strong> Download your completed form, ready to sign and submit. We even provide mailing instructions.</li>
          </ol>
        </div>
      </section>

      {/* Why Open Nest AI */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Why Open Nest AI?</h2>
          <ul className="fs-5">
            <li>✔ Smart Filing Tools, powered by AI</li>
            <li>✔ Designed by Immigrants and Advocates</li>
            <li>✔ Transparent, Low-Cost Pricing</li>
            <li>✔ Privacy-First Platform</li>
            <li>✔ Always Updating with USCIS Changes</li>
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-5 text-center">
        <div className="container">
          <blockquote className="blockquote">
            <p className="mb-4 fst-italic">
              "This tool gave me freedom — not just legal help."
            </p>
            <footer className="blockquote-footer">Samira A., asylum applicant from Nigeria</footer>
          </blockquote>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="mb-3">Coming Soon: Partner With Us</h2>
          <p className="mb-4">
            Are you a nonprofit or immigration attorney? We’re building tools to help you serve more people with less burnout.
          </p>
          <a href="/contact" className="btn btn-primary">Join Our Partner Program →</a>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-4 bg-white">
        <div className="container text-center text-muted small">
          <p>
            Open Nest AI is not a law firm and does not provide legal advice. If your case is complex or you need representation, we can connect you with trusted referrals.
          </p>
        </div>
      </section>

      {/* Scrollable Sections */}
      <section id="whyus" className="py-5">
        <WhyUs />
      </section>

      <section id="industries" className="py-5 bg-light">
        <Industries />
      </section>

      <section id="about" className="py-5">
        <About />
      </section>

      <section id="contact" className="py-5 bg-light">
        <Contact />
      </section>
    </div>
  );
}
