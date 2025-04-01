import React from 'react';

export default function WhyUs() {
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Why Us</h2>
      <p>
        At Asylum Line, we understand how overwhelming and costly the asylum process can be—because we’ve seen it firsthand. The traditional immigration system in the U.S. is overburdened, complex, and expensive, making it difficult for those who need protection the most. We believe technology can change that. Just like TurboTax revolutionized tax filing, Asylum Line is transforming the asylum process by making it accessible, affordable, and easy to navigate. Our streamlined platform guides you through each step, allowing you to generate a complete asylum application packet for a fraction of the cost of hiring an attorney. By leveraging technology, we remove unnecessary barriers and put control back into your hands.
      </p>

      <h3 className="mt-5">Who We Help</h3>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Asylum Seekers</h5>
              <p className="card-text">
                If you are fleeing persecution and looking for safety in the U.S., we provide a clear and affordable way to submit your application.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Advocacy Groups & Nonprofits</h5>
              <p className="card-text">
                If you help asylum seekers navigate the system, our platform simplifies the paperwork so you can focus on support and advocacy.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Community Support Networks</h5>
              <p className="card-text">
                Volunteers, religious organizations, and local groups can use Asylum Line to guide individuals through the process with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Pro Bono Legal Clinics</h5>
              <p className="card-text">
                For attorneys and law students providing free legal aid, Asylum Line offers a structured, accessible way to complete asylum applications efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
