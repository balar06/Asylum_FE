import React from "react";

const SpouseInfoForm = ({ register }) => (
  <>
    <h2 className="text-xl font-semibold mb-2">Spouse Information</h2>
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium">Spouse's Last Name</label>
        <input {...register("spouseLastName")} className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Spouse's First Name</label>
        <input {...register("spouseFirstName")} className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Spouse's Date of Birth</label>
        <input type="date" {...register("spouseDOB")} className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Spouse's Nationality</label>
        <input {...register("spouseNationality")} className="border rounded w-full p-2" />
      </div>
    </div>
  </>
);

export default SpouseInfoForm;
