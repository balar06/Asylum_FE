import React from "react";

export default function PersonalInfoForm({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* 1-6: Name & Identification */}
      <div>
        <label className="block text-sm font-medium">A-Number</label>
        <input type="text" {...register("personalInfo.aNumber")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">U.S. Social Security Number</label>
        <input type="text" {...register("personalInfo.ssn")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">USCIS Online Account Number</label>
        <input type="text" {...register("personalInfo.uscisNumber")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input type="text" {...register("personalInfo.lastName", { required: "Last name is required" })} className="mt-1 block w-full border rounded-md p-2" />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input type="text" {...register("personalInfo.firstName", { required: "First name is required" })} className="mt-1 block w-full border rounded-md p-2" />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Middle Name</label>
        <input type="text" {...register("personalInfo.middleName")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      {/* 7. Other Names Used */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Other Names Used (including maiden & aliases)</label>
        <input type="text" {...register("personalInfo.otherNames")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      {/* 8. Physical Residence */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Street Address (Physical Residence)</label>
        <input type="text" {...register("personalInfo.residenceAddress")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Apt Number</label>
        <input type="text" {...register("personalInfo.residenceApt")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">City</label>
        <input type="text" {...register("personalInfo.residenceCity")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">State</label>
        <input type="text" {...register("personalInfo.residenceState")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Zip Code</label>
        <input type="text" {...register("personalInfo.residenceZip")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Telephone Number</label>
        <input type="text" {...register("personalInfo.residencePhone")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      {/* 9. Mailing Address */}
      <div className="md:col-span-2 mt-4 border-t pt-4">
        <label className="block text-sm font-medium">Mailing Address (if different)</label>
        <input type="text" {...register("personalInfo.mailingCareOf")} placeholder="In care of (if applicable)" className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Street</label>
        <input type="text" {...register("personalInfo.mailingStreet")} className="mt-1 block w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Apt Number</label>
        <input type="text" {...register("personalInfo.mailingApt")} className="mt-1 block w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">City</label>
        <input type="text" {...register("personalInfo.mailingCity")} className="mt-1 block w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">State</label>
        <input type="text" {...register("personalInfo.mailingState")} className="mt-1 block w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Zip Code</label>
        <input type="text" {...register("personalInfo.mailingZip")} className="mt-1 block w-full border rounded-md p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Telephone Number</label>
        <input type="text" {...register("personalInfo.mailingPhone")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      {/* 10–17: Personal Data */}
      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select {...register("personalInfo.gender")} className="mt-1 block w-full border rounded-md p-2">
          <option value="">Select...</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Marital Status</label>
        <select {...register("personalInfo.maritalStatus")} className="mt-1 block w-full border rounded-md p-2">
          <option value="">Select...</option>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input type="date" {...register("personalInfo.dob")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">City and Country of Birth</label>
        <input type="text" {...register("personalInfo.birthCityCountry")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Present Nationality</label>
        <input type="text" {...register("personalInfo.presentNationality")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Nationality at Birth</label>
        <input type="text" {...register("personalInfo.birthNationality")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Race, Ethnic or Tribal Group</label>
        <input type="text" {...register("personalInfo.ethnicGroup")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Religion</label>
        <input type="text" {...register("personalInfo.religion")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      {/* Immigration Proceedings & Other Fields will go in next step/page if needed */}
    </div>
  );
}
