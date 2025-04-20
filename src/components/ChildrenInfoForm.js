import React from "react";
import { useFieldArray } from "react-hook-form";

export default function ChildrenInfoForm({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "children",
  });

  const addChild = () => {
    append({
      aNumber: "",
      passportNumber: "",
      maritalStatus: "",
      ssn: "",
      lastName: "",
      firstName: "",
      middleName: "",
      dob: "",
      birthPlace: "",
      nationality: "",
      raceEthnicity: "",
      gender: "",
      isInUS: "",
      usLocation: "",
      entryPlace: "",
      lastEntryDate: "",
      i94Number: "",
      statusWhenAdmitted: "",
      currentStatus: "",
      statusExpiry: "",
      isInCourtProceedings: "",
      isIncludedInApp: ""
    });
  };

  return (
    <div>
      {fields.map((child, index) => (
        <div
          key={child.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 border rounded-lg relative bg-gray-50"
        >
          <button
            type="button"
            onClick={() => remove(index)}
            className="absolute top-2 right-2 text-red-600 text-sm"
          >
            ✕ Remove
          </button>

          {/* 1. A-Number */}
          <div>
            <label className="block text-sm font-medium">A-Number</label>
            <input
              type="text"
              {...register(`children.${index}.aNumber`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 2. Passport/ID */}
          <div>
            <label className="block text-sm font-medium">Passport/ID Card Number</label>
            <input
              type="text"
              {...register(`children.${index}.passportNumber`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 3. Marital Status */}
          <div>
            <label className="block text-sm font-medium">Marital Status</label>
            <select
              {...register(`children.${index}.maritalStatus`)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>

          {/* 4. SSN */}
          <div>
            <label className="block text-sm font-medium">U.S. Social Security Number</label>
            <input
              type="text"
              {...register(`children.${index}.ssn`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 5-7. Name Fields */}
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              {...register(`children.${index}.lastName`, { required: "Last name is required" })}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              {...register(`children.${index}.firstName`, { required: "First name is required" })}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Middle Name</label>
            <input
              type="text"
              {...register(`children.${index}.middleName`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 8. DOB */}
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              {...register(`children.${index}.dob`, { required: "Date of birth is required" })}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 9. City and Country of Birth */}
          <div>
            <label className="block text-sm font-medium">City and Country of Birth</label>
            <input
              type="text"
              {...register(`children.${index}.birthPlace`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 10. Nationality */}
          <div>
            <label className="block text-sm font-medium">Nationality (Citizenship)</label>
            <input
              type="text"
              {...register(`children.${index}.nationality`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 11. Race, Ethnicity, or Tribal Group */}
          <div>
            <label className="block text-sm font-medium">Race, Ethnic, or Tribal Group</label>
            <input
              type="text"
              {...register(`children.${index}.raceEthnicity`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 12. Gender */}
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              {...register(`children.${index}.gender`, { required: "Gender is required" })}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* 13. Is child in U.S. */}
          <div>
            <label className="block text-sm font-medium">Is the child in the U.S.?</label>
            <select
              {...register(`children.${index}.isInUS`)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* 13b. Location if not in US */}
          <div>
            <label className="block text-sm font-medium">If not in U.S., specify location</label>
            <input
              type="text"
              {...register(`children.${index}.usLocation`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 14. Place of last entry */}
          <div>
            <label className="block text-sm font-medium">Place of Last Entry into U.S.</label>
            <input
              type="text"
              {...register(`children.${index}.entryPlace`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 15. Date of last entry */}
          <div>
            <label className="block text-sm font-medium">Date of Last Entry into U.S.</label>
            <input
              type="date"
              {...register(`children.${index}.lastEntryDate`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 16. I-94 Number */}
          <div>
            <label className="block text-sm font-medium">I-94 Number</label>
            <input
              type="text"
              {...register(`children.${index}.i94Number`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 17. Status when last admitted */}
          <div>
            <label className="block text-sm font-medium">Status When Last Admitted</label>
            <input
              type="text"
              {...register(`children.${index}.statusWhenAdmitted`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 18. Current status */}
          <div>
            <label className="block text-sm font-medium">Current Status</label>
            <input
              type="text"
              {...register(`children.${index}.currentStatus`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 19. Expiration of status */}
          <div>
            <label className="block text-sm font-medium">Status Expiration Date</label>
            <input
              type="date"
              {...register(`children.${index}.statusExpiry`)}
              className="mt-1 block w-full border rounded-md p-2"
            />
          </div>

          {/* 20. In immigration court? */}
          <div>
            <label className="block text-sm font-medium">In Immigration Court Proceedings?</label>
            <select
              {...register(`children.${index}.isInCourtProceedings`)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* 21. Included in application */}
          <div>
            <label className="block text-sm font-medium">Included in This Application?</label>
            <select
              {...register(`children.${index}.isIncludedInApp`)}
              className="mt-1 block w-full border rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addChild}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        ➕ Add Another Child
      </button>
    </div>
  );
}
