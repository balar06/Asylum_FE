import React from "react";

const PersonalInfoForm = ({ register, errors }) => (
  <>
    <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
    <div className="grid grid-cols-1 gap-4">
      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input {...register("lastName", { required: true })} className="border rounded w-full p-2" />
        {errors.lastName && <p className="text-red-500 text-sm">Required</p>}
      </div>
      {/* First Name */}
      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input {...register("firstName", { required: true })} className="border rounded w-full p-2" />
        {errors.firstName && <p className="text-red-500 text-sm">Required</p>}
      </div>
      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input type="date" {...register("dob", { required: true })} className="border rounded w-full p-2" />
        {errors.dob && <p className="text-red-500 text-sm">Required</p>}
      </div>
      {/* Gender */}
      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select {...register("gender", { required: true })} className="border rounded w-full p-2">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">Required</p>}
      </div>
      {/* Marital Status */}
      <div>
        <label className="block text-sm font-medium">Marital Status</label>
        <select {...register("maritalStatus", { required: true })} className="border rounded w-full p-2">
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        {errors.maritalStatus && <p className="text-red-500 text-sm">Required</p>}
      </div>
    </div>
  </>
);

export default PersonalInfoForm;
