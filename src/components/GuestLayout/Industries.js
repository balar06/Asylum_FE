import React from 'react';

export default function Industries() {
  return (
    <div className="container mt-3">
      <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
      <p>
        Asylum Line is designed to empower migrants, legal professionals, and consulate offices by providing a streamlined, AI-powered asylum application tool. Our platform bridges the gap between complex immigration processes and those who need accessible, affordable solutions.
      </p>

      <h3 className="mt-5 mb-3">Who Benefits from Our Platform</h3>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Migrants & Asylum Seekers</h5>
              <p className="card-text">
                Our tool provides clear guidance, AI-powered document preparation, and step-by-step assistance to help migrants navigate the complex asylum application process with confidence and ease.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Law Firms & Legal Advocates</h5>
              <p className="card-text">
                Legal professionals can leverage our automated platform to streamline case preparation, reduce paperwork, and focus on providing critical legal advice, making asylum assistance more efficient and scalable.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Consulates & Government Agencies</h5>
              <p className="card-text">
                Consulates and immigration offices benefit from faster, more accurate submissions and standardized documentation, improving processing times and reducing administrative burden.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nonprofits & Support Organizations</h5>
              <p className="card-text">
                Organizations assisting migrants can use our platform to guide clients through the asylum process, providing accessible resources and reducing barriers to legal protection.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4">
        Ready to simplify asylum applications? <a href="/register" className="text-blue-600 underline">Register now</a> and harness AI-powered tools designed for migrants and legal professionals.
      </p>
    </div>
  );
}
