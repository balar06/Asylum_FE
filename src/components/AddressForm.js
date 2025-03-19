import React from "react";

const AddressForm = ({ register, errors }) => (
  <>
    <h2 className="text-xl font-semibold mb-2">Address Information</h2>
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium">Street Address</label>
        <input {...register("street", { required: true })} className="border rounded w-full p-2" />
        {errors.street && <p className="text-red-500 text-sm">Required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">City</label>
        <input {...register("city", { required: true })} className="border rounded w-full p-2" />
        {errors.city && <p className="text-red-500 text-sm">Required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">State</label>
        <input {...register("state", { required: true })} className="border rounded w-full p-2" />
        {errors.state && <p className="text-red-500 text-sm">Required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Zip Code</label>
        <input {...register("zip", { required: true })} className="border rounded w-full p-2" />
        {errors.zip && <p className="text-red-500 text-sm">Required</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input {...register("phone", { required: true })} className="border rounded w-full p-2" />
        {errors.phone && <p className="text-red-500 text-sm">Required</p>}
      </div>
    </div>
  </>
);

export default AddressForm;
