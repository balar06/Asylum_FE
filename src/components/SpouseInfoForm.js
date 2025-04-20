import React from "react";

export default function SpouseInfoForm({ register, errors, maritalStatus }) {
  const isMarried = maritalStatus === "Married";

  if (!isMarried) {
    return (
      <div className="p-4 border rounded bg-gray-100 text-gray-800">
        You have indicated you are not married. Spouse information is not required.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium">A-Number</label>
        <input type="text" {...register("spouseInfo.spouseANumber")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Passport/ID Card Number</label>
        <input type="text" {...register("spouseInfo.spousePassportId")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input type="date" {...register("spouseInfo.spouseDob")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">U.S. Social Security Number</label>
        <input type="text" {...register("spouseInfo.spouseSSN")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input type="text" {...register("spouseInfo.spouseLastName")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input type="text" {...register("spouseInfo.spouseFirstName")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Middle Name</label>
        <input type="text" {...register("spouseInfo.spouseMiddleName")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Other Names Used</label>
        <input type="text" {...register("spouseInfo.spouseOtherNames")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Marriage</label>
        <input type="date" {...register("spouseInfo.spouseMarriageDate")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Place of Marriage</label>
        <input type="text" {...register("spouseMarriagePlace")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">City and Country of Birth</label>
        <input type="text" {...register("spouseInfo.spouseBirthPlace")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Nationality (Citizenship)</label>
        <input type="text" {...register("spouseInfo.spouseNationality")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Race, Ethnic, or Tribal Group</label>
        <input type="text" {...register("spouseInfo.spouseRaceEthnicGroup")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Gender</label>
        <select {...register("spouseInfo.spouseGender")} className="mt-1 block w-full border rounded-md p-2">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Is this person in the U.S.?</label>
        <select {...register("spouseInfo.spouseInUS")} className="mt-1 block w-full border rounded-md p-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Place of Last Entry into the U.S.</label>
        <input type="text" {...register("spouseInfo.spouseLastEntryPlace")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Last Entry</label>
        <input type="date" {...register("spouseInfo.spouseLastEntryDate")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">I-94 Number</label>
        <input type="text" {...register("spouseInfo.spouseI94Number")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Status when Last Admitted</label>
        <input type="text" {...register("spouseInfo.spouseAdmissionStatus")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Current Status</label>
        <input type="text" {...register("spouseInfo.spouseCurrentStatus")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Expiration Date of Authorized Stay</label>
        <input type="date" {...register("spouseInfo.spouseStayExpiration")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">In Immigration Court Proceedings?</label>
        <select {...register("spouseInfo.spouseInCourt")} className="mt-1 block w-full border rounded-md p-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Previous Arrival (if any)</label>
        <input type="date" {...register("spouseInfo.spousePreviousArrival")} className="mt-1 block w-full border rounded-md p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Include Spouse in Application?</label>
        <select {...register("spouseInfo.spouseIncluded")} className="mt-1 block w-full border rounded-md p-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  );
}
