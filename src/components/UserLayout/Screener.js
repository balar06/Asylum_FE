import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../constants/api';

const questions = [
  {
    id: 0,
    type: 'info',
    content: `This screening is not legal advice. Using this tool does not create a lawyer-client relationship. Only a lawyer or a DOJ accredited representative can give you legal advice. AsylumLine does not connect to the U.S. Citizenship and Immigration Services (“USCIS” or government).`,
    buttonText: 'Start Screening',
  },
  {
    id: 1,
    type: 'yesno',
    question: 'Are you currently in the U.S.?',
    onNo: 'You NEED to be physically present in the U.S. to apply for asylum.',
  },
  {
    id: 2,
    type: 'yesno',
    question: 'Are you a U.S. citizen?',
    onYes: 'You are not eligible for asylum.',
  },
  {
    id: 3,
    type: 'yesno',
    question: 'Do you fear persecution in your home country?',
    onNo: 'You need to hold fear of persecution to apply for asylum.',
  },
  {
    id: 4,
    type: 'checkbox',
    question: 'What kind of persecution do you fear?',
    options: [
      'Race',
      'Religion',
      'Nationality',
      'Political opinion',
      'Membership in a particular social group',
      'Other',
      'I am not sure',
    ],
  },
  {
    id: 5,
    type: 'text',
    question: 'Were you given an A-number?',
    placeholder: 'Enter your A-number if known (optional)',
  },
];

export default function Screener() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const current = questions[step];

  const handleNext = (answer) => {
    if (current.type === 'yesno') {
      if (current.onYes && answer === 'Yes') {
        setError(current.onYes);
        return;
      }
      if (current.onNo && answer === 'No') {
        setError(current.onNo);
        return;
      }
    }

    setError('');
    setAnswers((prev) => ({ ...prev, [current.id]: answer }));
    setStep((prev) => prev + 1);
  };

  const renderQuestion = () => {
    if (current.type === 'info') {
      return (
        <>
          <p className="text-muted mb-4">{current.content}</p>
          <button onClick={() => setStep(step + 1)} className="btn btn-primary w-100">
            {current.buttonText}
          </button>
        </>
      );
    }

    if (current.type === 'yesno') {
      return (
        <>
          <h5 className="mb-4">{current.question}</h5>
          <div className="d-flex gap-3">
            <button onClick={() => handleNext('Yes')} className="btn btn-success w-50">Yes</button>
            <button onClick={() => handleNext('No')} className="btn btn-danger w-50">No</button>
          </div>
        </>
      );
    }

    if (current.type === 'checkbox') {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const selected = Array.from(e.target.elements)
              .filter((el) => el.checked)
              .map((el) => el.value);
            if (selected.length === 0) {
              setError('Please select at least one option.');
            } else {
              handleNext(selected);
            }
          }}
        >
          <h5 className="mb-3">{current.question}</h5>
          <div className="mb-4">
            {current.options.map((opt, i) => (
              <div className="form-check" key={i}>
                <input
                  type="checkbox"
                  id={`opt-${i}`}
                  className="form-check-input"
                  value={opt}
                  name="persecution"
                />
                <label htmlFor={`opt-${i}`} className="form-check-label">
                  {opt}
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary w-100">Next</button>
        </form>
      );
    }

    if (current.type === 'text') {
      return (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const aNumber = e.target.elements['anumber'].value;
            const passportFile = e.target.elements['passportFile'].files[0];
            const birthCertFile = e.target.elements['birthCertificateFile'].files[0];

            if (!passportFile || !birthCertFile) {
              setError('Please upload both passport and birth certificate files.');
              return;
            }

            try {
              const formData = new FormData();
              formData.append('passportFile', passportFile);
              formData.append('birthCertificateFile', birthCertFile);

              const userId = localStorage.getItem('userId');
              if (!userId) {
                setError('User ID not found. Please log in again.');
                return;
              }

              const res = await fetch(`${API_ENDPOINTS.UPLOADDOCUMENT}/${userId}`, {
                method: 'POST',
                body: formData,
              });

              if (!res.ok) {
                const errMsg = await res.text();
                throw new Error(errMsg || 'Upload failed');
              }

              const uploadResponse = await res.json();

              const updatedAnswers = {
                ...answers,
                [current.id]: aNumber,
                documents: uploadResponse,
              };

              setAnswers(updatedAnswers);
              localStorage.setItem('asylumEligible', 'true');
              navigate('/dashboard');
            } catch (err) {
              setError(err.message || 'Something went wrong. Please try again.');
            }
          }}
        >
          <h5 className="mb-3">{current.question}</h5>
          <input
            name="anumber"
            type="text"
            className="form-control mb-3"
            placeholder={current.placeholder}
          />

          <label className="form-label">Upload Passport (PDF/Image)</label>
          <input
            name="passportFile"
            type="file"
            className="form-control mb-3"
            accept=".pdf,image/*"
            required
          />

          <label className="form-label">Upload Birth Certificate (PDF/Image)</label>
          <input
            name="birthCertificateFile"
            type="file"
            className="form-control mb-4"
            accept=".pdf,image/*"
            required
          />

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      );
    }

    return null;
  };

  return (
    <div className="w-100 h-screen d-flex justify-content-center align-items-center p-4">
      <div className="bg-white border shadow rounded p-5 w-100" style={{ maxWidth: '600px' }}>
        <h4 className="text-center mb-4 text-xl font-semibold">Asylum Screener</h4>
        {renderQuestion()}

        {error && (
          <div className="alert alert-warning mt-4">
            {error}
            <div className="mt-3 text-center">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => navigate('/')}>
                Return to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
