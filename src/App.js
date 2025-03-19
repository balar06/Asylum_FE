import './App.css';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { saveAs } from "file-saver";

import PersonalInfoForm from "./components/PersonalInfoForm";
import AddressForm from "./components/AddressForm";
import SpouseInfoForm from "./components/SpouseInfoForm";
import ChildrenInfoForm from "./components/ChildrenInfoForm";

import { generatePdf } from "./utils/pdfHelper";
import Header from "./components/Header";   // import header
import Footer from "./components/Footer";   // import footer

export default function App() {
  const { register, handleSubmit, control, trigger, formState: { errors } } = useForm({
    defaultValues: { children: [] },
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    setLoading(true);
    const pdfBytes = await generatePdf(data);
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "filled_i-589.pdf");
    setLoading(false);
  };

  const handlePreview = async () => {
    const valid = await trigger();
    if (!valid) return;
    const data = await handleSubmit((d) => d)();
    const pdfBytes = await generatePdf(data);
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    setPreviewUrl(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      
      <main className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Fill I-589 Form</h1>
        <div className="mb-4 text-center text-gray-600">Step {step} of 4</div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && <PersonalInfoForm register={register} errors={errors} />}
          {step === 2 && <AddressForm register={register} errors={errors} />}
          {step === 3 && <SpouseInfoForm register={register} />}
          {step === 4 && <ChildrenInfoForm register={register} control={control} />}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                Back
              </button>
            )}
            {step < 4 && (
              <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Next
              </button>
            )}
            {step === 4 && (
              <div className="flex gap-4">
                <button type="button" onClick={handlePreview} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Preview PDF
                </button>
                <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  {loading ? "Generating..." : "Download PDF"}
                </button>
              </div>
            )}
          </div>
        </form>

        {previewUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">PDF Preview:</h2>
            <iframe src={previewUrl} title="PDF Preview" className="w-full h-96 border rounded"></iframe>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
