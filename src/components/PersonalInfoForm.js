import React from "react";

export default function PersonalInfoForm({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          {...register("lastName", { required: "Last name is required" })}
          className="mt-1 block w-full border rounded-md p-2"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          {...register("firstName", { required: "First name is required" })}
          className="mt-1 block w-full border rounded-md p-2"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Middle Name</label>
        <input
          type="text"
          {...register("middleName")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">A-Number</label>
        <input
          type="text"
          {...register("aNumber")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          {...register("dob", { required: "Date of birth is required" })}
          className="mt-1 block w-full border rounded-md p-2"
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">City and Country of Birth</label>
        <input
          type="text"
          {...register("birthPlace")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select
          {...register("gender", { required: "Gender is required" })}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Marital Status</label>
        <select
          {...register("maritalStatus", { required: "Marital status is required" })}
          className="mt-1 block w-full border rounded-md p-2"
        >
          <option value="">Select...</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>
        {errors.maritalStatus && (
          <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
        )}
      </div>
    </div>
  );
}
