import React from "react";

export default function SpouseInfoForm({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          {...register("spouseFullName")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Middle Name</label>
        <input
          type="text"
          {...register("spouseMiddleName")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Spouse A-Number</label>
        <input
          type="text"
          {...register("spouseANumber")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Spouse DOB</label>
        <input
          type="date"
          {...register("spouseDob")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Spouse Nationality</label>
        <input
          type="text"
          {...register("spouseNationality")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Spouse Place of Birth</label>
        <input
          type="text"
          {...register("spouseBirthPlace")}
          className="mt-1 block w-full border rounded-md p-2"
        />
      </div>
    </div>
  );
}
