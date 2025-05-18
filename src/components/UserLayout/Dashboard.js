import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import PersonalInfoForm from "../PersonalInfoForm";
import SpouseInfoForm from "../SpouseInfoForm";
import ChildrenInfoForm from "../ChildrenInfoForm";
import BackgroundInfoForm from "../BackgroundInfoForm";
import ApplicationInfoForm from "../ApplicationInfoForm";
import { FaSpinner } from 'react-icons/fa';
import { FormDetails, PersonalInfo, SpouseInfo, ChildInfo } from "../../model/FormDetails";

// Enum for tab names
const Tabs = {
  PERSONAL: "personalInfo",
  SPOUSE: "spouseDetail",
  CHILDREN: "childrenInfo",
  BACKGROUND: "backgroundInfo",
  APPLICATION: "applicationInfo",
};

const tabOrder = [
  Tabs.PERSONAL,
  Tabs.SPOUSE,
  Tabs.CHILDREN,
  Tabs.BACKGROUND,
  Tabs.APPLICATION,
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(Tabs.PERSONAL);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [passportImage, setPassportImage] = useState(null); // State for passport image

  useEffect(() => {
    const name = localStorage.getItem('userName') || '';
    setUserName(name);
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const formValues = useWatch({ control });
  const maritalStatus = formValues?.personalInfo?.maritalStatus || "";
  const requiredFields = [
    "personalInfo.lastName", "personalInfo.firstName", "personalInfo.dob", "personalInfo.gender", "personalInfo.maritalStatus"
  ];

  const getProgress = () => {
    if (!formValues) return 0;

    const filledCount = requiredFields.filter(field => {
      const pathParts = field.split('.');
      let value = formValues;

      // Traverse the nested object structure
      for (const part of pathParts) {
        value = value?.[part];
        if (value === undefined) break;
      }

      // Check if the final value exists and is not empty
      return value !== undefined && value !== null && value.toString().trim() !== '';
    }).length;

    return Math.round((filledCount / requiredFields.length) * 100);
  };
  const progress = getProgress();

  const onSubmit = async (data) => {
    if (!passportImage) {
      alert("Please upload your passport image.");
      return;
    }

    setLoading(true);
    try {
      const personalInfo = new PersonalInfo(data.personalInfo);
      const spouseInfo = new SpouseInfo(data.spouseInfo);
      const children = (data.children || []).map(child => new ChildInfo(child));

      const formDetails = new FormDetails({
        personalInfo,
        spouseInfo,
        children
      });

      console.log("Form Details:", formDetails);

      const formData = new FormData();

      formData.append("formData", new Blob([JSON.stringify(data)], { type: "application/json" }));
      
      formData.append("image", passportImage);
      const response = await fetch('https://asylum-be-xbk2.onrender.com/api/pdfHandler/fill', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filled-i-589.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handlePassportChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPassportImage(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tabs.PERSONAL:
        return <PersonalInfoForm register={register} errors={errors} />;
      case Tabs.SPOUSE:
        return <SpouseInfoForm register={register} errors={errors} maritalStatus={maritalStatus} />;
      case Tabs.CHILDREN:
        return <ChildrenInfoForm register={register} errors={errors} control={control} />;
      case Tabs.BACKGROUND:
        return <BackgroundInfoForm register={register} errors={errors} control={control} />;
      case Tabs.APPLICATION:
        return <ApplicationInfoForm register={register} errors={errors} control={control} />;
      default:
        return <p className="mt-4">Default info</p>;
    }
  };

  const currentIndex = tabOrder.indexOf(activeTab);

  const handleNext = () => {
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome {userName && `, ${userName}`}!</h1>

      {/* Nav Bar */}
      <nav className="flex flex-col sm:flex-row mt-6 space-y-2 sm:space-y-0 sm:space-x-4">
        {tabOrder.map((tab) => (
          <button
            key={tab}
            className={`flex-1 text-center px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 bg-white p-4 rounded shadow">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
          <div
            className="bg-green-500 h-full text-xs text-center text-white"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>

        {renderContent()}

        <div className="mt-6 flex justify-end">
          <div className="flex gap-2">
            {currentIndex < tabOrder.length - 1 ? '' : (
              <>
                {/* Passport Upload */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePassportChange}
                  className="px-4 py-2 rounded bg-gray-500 text-white"
                />
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 rounded flex items-center justify-center ${
                    loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </form>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded ${
            currentIndex === 0 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-500 text-white"
          }`}
        >
          Back
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === tabOrder.length - 1}
            className={`px-4 py-2 rounded ${
              currentIndex === tabOrder.length - 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-500 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
