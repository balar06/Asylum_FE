import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import PersonalInfoForm from "../PersonalInfoForm";
import SpouseInfoForm from "../SpouseInfoForm";
import ChildrenInfoForm from "../ChildrenInfoForm";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("personalInfo");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const formValues = useWatch({ control });

  const requiredFields = ["lastName", "firstName", "dob", "gender", "maritalStatus", "spouseFullName", "spouseANumber", "spouseDob", "spouseNationality", "spouseBirthPlace"];
  const getProgress = () => {
    if (!formValues) return 0;
    const filledCount = requiredFields.filter((field) =>
      formValues?.[field]?.toString().trim()
    ).length;
    return Math.round((filledCount / requiredFields.length) * 100);
  };

  const progress = getProgress(); // Moved here!

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personalInfo":
        return <PersonalInfoForm register={register} errors={errors} />;
      case "spouseDetail":
        return <SpouseInfoForm register={register} errors={errors} />;
      case "childrenInfo":
        return <ChildrenInfoForm register={register} errors={errors} />;
      case "background":
        return <p className="mt-4">Background info</p>;
      case "applicationInfo":
        return <p className="mt-4">Application info</p>;
      default:
        return <p className="mt-4">Default info</p>;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="text-gray-600 mt-2">Here is an overview of your activities.</p>

      {/* Nav Bar */}
      <nav className="flex flex-col sm:flex-row mt-6 space-y-2 sm:space-y-0 sm:space-x-4">
        {["personalInfo", "spouseDetail", "childrenInfo", "background", "applicationInfo"].map((tab) => (
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
        {(
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
            <div
              className="bg-green-500 h-full text-xs text-center text-white"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        )}

        {renderContent()}

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save Move Forward
          </button>
        </div>
      </form>
    </div>
  );
}
