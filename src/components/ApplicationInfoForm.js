import React from "react";

export default function ApplicationInfoForm({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Reason for applying */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">I am seeking asylum or withholding of removal based on:</label>
        <div className="grid grid-cols-2 gap-2">
          <label><input type="checkbox" value="Race" {...register("reasonRace")} className="mr-2" />Race</label>
          <label><input type="checkbox" value="Religion" {...register("reasonReligion")} className="mr-2" />Religion</label>
          <label><input type="checkbox" value="Nationality" {...register("reasonNationality")} className="mr-2" />Nationality</label>
          <label><input type="checkbox" value="Political opinion" {...register("reasonPolitical")} className="mr-2" />Political opinion</label>
          <label><input type="checkbox" value="Social group" {...register("reasonSocialGroup")} className="mr-2" />Membership in a particular social group</label>
          <label><input type="checkbox" value="Torture Convention" {...register("reasonTorture")} className="mr-2" />Torture Convention</label>
        </div>
      </div>

      {/* Harm or mistreatment */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Have you, your family, or close friends experienced harm or threats in the past?</label>
        <select {...register("pastHarm")} className="block w-full border rounded-md p-2 mt-1 mb-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea {...register("pastHarmDetails")} placeholder="If 'Yes', explain: what happened, when, by whom, and why." className="block w-full border rounded-md p-2" rows={4} />
      </div>

      {/* Fear of harm if returned */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Do you fear harm or mistreatment if you return to your home country?</label>
        <select {...register("fearOfReturn")} className="block w-full border rounded-md p-2 mt-1 mb-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea {...register("fearOfReturnDetails")} placeholder="If 'Yes', explain: what harm you fear, by whom, and why." className="block w-full border rounded-md p-2" rows={4} />
      </div>

      {/* Accused or detained outside U.S. */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Have you or family members been accused or detained outside the U.S.?</label>
        <select {...register("accusedOutsideUS")} className="block w-full border rounded-md p-2 mt-1 mb-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea {...register("accusedOutsideUSDetails")} placeholder="If 'Yes', explain circumstances and reasons." className="block w-full border rounded-md p-2" rows={4} />
      </div>

      {/* Membership in organizations */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Have you or your family members ever belonged to any organizations in your home country?</label>
        <select {...register("belongedToGroups")} className="block w-full border rounded-md p-2 mt-1 mb-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea {...register("belongedToGroupsDetails")} placeholder="If 'Yes', describe your or their involvement and roles." className="block w-full border rounded-md p-2" rows={4} />
      </div>

      {/* Continued participation */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Do you or your family continue to participate in these organizations or groups?</label>
        <select {...register("continuedParticipation")} className="block w-full border rounded-md p-2 mt-1 mb-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea {...register("continuedParticipationDetails")} placeholder="If 'Yes', describe current involvement and roles." className="block w-full border rounded-md p-2" rows={4} />
      </div>

      {/* Fear of torture */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Are you afraid of being subjected to torture in your home country or any other country?</label>
        <select {...register("fearOfTorture")} className="block w-full border rounded-md p-2 mt-1 mb-2">
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea {...register("fearOfTortureDetails")} placeholder="If 'Yes', explain who would torture you, why, and how." className="block w-full border rounded-md p-2" rows={4} />
      </div>
    </div>
  );
}
