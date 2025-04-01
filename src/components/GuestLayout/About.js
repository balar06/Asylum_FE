import React from 'react';

export default function About() {
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Our Story</h2>
      <p>
        Asylum Line was founded with a simple but powerful belief: everyone deserves a fair shot at safety, no matter their financial situation. 
        After working in humanitarian and business immigration for over two years, we saw countless asylum seekers struggle—not because they didn’t qualify, 
        but because the process was expensive, confusing, and inaccessible. The U.S. immigration system is broken, overburdened, and outdated, 
        leaving thousands of vulnerable individuals without clear options.
      </p>
      <p>
        We knew there had to be a better way. That’s why we built Asylum Line—to harness technology and create a user-friendly, automated solution that 
        makes applying for asylum as simple as filing taxes online. Our mission is to take the stress and guesswork out of the asylum process, 
        so you can focus on what truly matters: rebuilding your life in safety and dignity.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                To make asylum accessible, affordable, and stress-free for everyone in need, using cutting-edge technology and automation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Our Approach</h5>
              <p className="card-text">
                We simplify complex paperwork and legal processes, providing a clear, guided pathway for asylum seekers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
