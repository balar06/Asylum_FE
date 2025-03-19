import React from "react";
import { useFieldArray } from "react-hook-form";

const ChildrenInfoForm = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({ control, name: "children" });

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Children Information</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="border p-2 mb-2 rounded">
          <div>
            <label className="block text-sm font-medium">Child's Name</label>
            <input {...register(`children.${index}.name`)} className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Child's Date of Birth</label>
            <input type="date" {...register(`children.${index}.dob`)} className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Child's Nationality</label>
            <input {...register(`children.${index}.nationality`)} className="border rounded w-full p-2" />
          </div>
          <button type="button" onClick={() => remove(index)} className="text-red-500 text-sm mt-1">Remove Child</button>
        </div>
      ))}
      <button type="button" onClick={() => append({})} className="bg-blue-500 text-white px-2 py-1 rounded">Add Child</button>
    </>
  );
};

export default ChildrenInfoForm;
