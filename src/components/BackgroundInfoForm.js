import React from "react";
import { useFieldArray } from "react-hook-form";

export default function BackgroundInfoForm({ register, control, errors }) {
  const previousAddresses = useFieldArray({ control, name: "previousAddresses" });
  const residences = useFieldArray({ control, name: "residences" });
  const education = useFieldArray({ control, name: "education" });
  const employment = useFieldArray({ control, name: "employment" });
  const family = useFieldArray({ control, name: "family" });

  const sections = [
    {
      key: "previousAddresses",
      label: "Previous Addresses (Before U.S.)",
      fields: ["street", "city", "state", "country", "fromDate", "toDate"],
      array: previousAddresses,
    },
    {
      key: "residences",
      label: "Residences (Past 5 Years)",
      fields: ["street", "city", "state", "country", "fromDate", "toDate"],
      array: residences,
    },
    {
      key: "education",
      label: "Education History",
      fields: ["schoolName", "schoolType", "schoolLocation", "fromDate", "toDate"],
      array: education,
    },
    {
      key: "employment",
      label: "Employment History",
      fields: ["employerName", "occupation", "fromDate", "toDate"],
      array: employment,
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map(({ key, label, fields, array }, sectionIdx) => (
        <div key={key}>
          {sectionIdx !== 0 && <hr className="border-t border-gray-300 my-6" />}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{label}</h2>
            <button
              type="button"
              onClick={() => array.append({})}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              ➕ Add {label}
            </button>
          </div>

          {array.fields.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100 border rounded mb-4 relative"
            >
              <button
                type="button"
                onClick={() => array.remove(index)}
                className="absolute top-2 right-2 text-red-500 text-sm"
              >
                ✕
              </button>

              {fields.map((fieldName) => (
                <div key={fieldName}>
                  <label className="block text-sm font-medium capitalize">
                    {fieldName.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={fieldName.includes("Date") ? "month" : "text"}
                    {...register(`${key}.${index}.${fieldName}`)}
                    className="mt-1 block w-full border rounded-md p-2"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* Family Info Section */}
      <hr className="border-t border-gray-300 my-6" />
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Family Information (Parents and Siblings)</h2>
          <button
            type="button"
            onClick={() => family.append({})}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            ➕ Add Family Member
          </button>
        </div>
        
        {family.fields.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border bg-gray-50 rounded relative"
          >
            <button
              type="button"
              onClick={() => family.remove(index)}
              className="absolute top-2 right-2 text-red-500 text-sm"
            >
              ✕
            </button>

            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                {...register(`family.${index}.fullName`)}
                className="mt-1 block w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Birthplace</label>
              <input
                type="text"
                {...register(`family.${index}.birthPlace`)}
                className="mt-1 block w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Current Location</label>
              <input
                type="text"
                {...register(`family.${index}.location`)}
                className="mt-1 block w-full border rounded-md p-2"
              />
            </div>
            <div className="flex items-end">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register(`family.${index}.deceased`)}
                  className="mr-2"
                />
                Deceased
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}