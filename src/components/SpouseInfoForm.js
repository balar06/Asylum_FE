import React from "react";
import { TextField, MenuItem, Button, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const SpouseInfoForm = ({ register, errors, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNext) onNext();
  };

  return (
    <div className="container py-4">
      <div className="bg-white p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            {/* IDs */}
            <div className="col-md-4">
              <TextField fullWidth label="A-Number (if any)" {...register("spouseANumber")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Passport/ID Card Number" {...register("spousePassportNumber")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="U.S. Social Security Number (if any)" {...register("spouseSSN")} />
            </div>

            {/* Names */}
            <div className="col-md-4">
              <TextField fullWidth label="Last Name" {...register("spouseLastName", { required: true })} error={!!errors.spouseLastName} helperText={errors.spouseLastName && "Required"} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="First Name" {...register("spouseFirstName", { required: true })} error={!!errors.spouseFirstName} helperText={errors.spouseFirstName && "Required"} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Middle Name" {...register("spouseMiddleName")} />
            </div>

            {/* Other names used */}
            <div className="col-md-6">
              <TextField fullWidth label="Other names used (include maiden/alias)" {...register("spouseOtherNames")} />
            </div>

            {/* Birth */}
            <div className="col-md-3">
              <TextField fullWidth type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} {...register("spouseDOB", { required: true })} error={!!errors.spouseDOB} helperText={errors.spouseDOB && "Required"} />
            </div>
            <div className="col-md-3">
              <FormLabel>Gender</FormLabel>
              <RadioGroup row {...register("spouseGender")}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
              </RadioGroup>
            </div>

            {/* Marriage */}
            <div className="col-md-4">
              <TextField fullWidth type="date" label="Date of Marriage" InputLabelProps={{ shrink: true }} {...register("marriageDate")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Place of Marriage" {...register("marriagePlace")} />
            </div>

            {/* Birthplace, Nationality, Ethnicity */}
            <div className="col-md-4">
              <TextField fullWidth label="City and Country of Birth" {...register("spouseBirthPlace")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Nationality (Citizenship)" {...register("spouseNationality")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Race, Ethnic, or Tribal Group" {...register("spouseEthnicGroup")} />
            </div>

            {/* Religion */}
            <div className="col-md-6">
              <TextField fullWidth label="Religion" {...register("spouseReligion")} />
            </div>

            {/* Address */}
            <div className="col-md-12">
              <TextField fullWidth label="Spouse's Address (if not living with you)" {...register("spouseAddress")} />
            </div>

            {/* Immigration Info */}
            <div className="col-md-4">
              <TextField select fullWidth label="Is your spouse in the U.S.?" defaultValue="" {...register("spouseInUS")}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </div>
            <div className="col-md-4">
              <TextField fullWidth type="date" label="Date of last entry into the U.S." InputLabelProps={{ shrink: true }} {...register("spouseLastEntryDate")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Place of last entry into the U.S." {...register("spouseLastEntryPlace")} />
            </div>

            <div className="col-md-4">
              <TextField fullWidth label="I-94 Number" {...register("spouseI94")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Status when last admitted (Visa type, if any)" {...register("spouseAdmissionStatus")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Current status" {...register("spouseCurrentStatus")} />
            </div>

            <div className="col-md-4">
              <TextField fullWidth type="date" label="Expiration date of stay (if any)" InputLabelProps={{ shrink: true }} {...register("spouseStatusExpiry")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth type="date" label="Previous U.S. entry date (if any)" InputLabelProps={{ shrink: true }} {...register("spousePreviousArrival")} />
            </div>

            {/* Court proceedings */}
            <div className="col-md-4">
              <TextField select fullWidth label="Is your spouse in immigration court proceedings?" defaultValue="" {...register("spouseInCourt")}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </div>

            {/* Include in Application */}
            <div className="col-md-6">
              <TextField select fullWidth label="Include spouse in this application?" defaultValue="" {...register("spouseIncluded")}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </div>

          </div>

          <div className="mt-4 d-flex justify-content-end">
            <Button variant="contained" color="primary" type="submit">
              Save & Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpouseInfoForm;
