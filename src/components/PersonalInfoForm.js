import React from "react";
import { useForm } from "react-hook-form";
import { TextField, MenuItem, Button, FormControlLabel, Radio, RadioGroup, FormLabel, FormControl } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonalInfoForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onNext();
  };

  return (
    <div className="container py-4">
      <div className="bg-white p-4 rounded shadow">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            {/* Identification Numbers */}
            <div className="col-md-4">
              <TextField fullWidth label="A-Number (if any)" {...register("aNumber")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="SSN (if any)" {...register("ssn")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="USCIS Online Account # (if any)" {...register("uscisNumber")} />
            </div>

            {/* Name Fields */}
            <div className="col-md-4">
              <TextField
                fullWidth
                label="Last Name"
                error={!!errors.lastName}
                helperText={errors.lastName && "Required"}
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="col-md-4">
              <TextField
                fullWidth
                label="First Name"
                error={!!errors.firstName}
                helperText={errors.firstName && "Required"}
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Middle Name" {...register("middleName")} />
            </div>

            <div className="col-md-12">
              <TextField fullWidth label="Other Names Used (maiden, aliases)" {...register("otherNames")} />
            </div>

            {/* Address Info */}
            <div className="col-md-12">
              <TextField fullWidth label="Physical Address" placeholder="Street, Apt, City, State, Zip" {...register("residence")} />
            </div>
            <div className="col-md-6">
              <TextField fullWidth label="Telephone Number" {...register("phone")} />
            </div>

            <div className="col-md-12">
              <TextField fullWidth label="Mailing Address (if different)" placeholder="Street, Apt, City, State, Zip" {...register("mailingAddress")} />
            </div>
            <div className="col-md-6">
              <TextField fullWidth label="Mailing Phone Number" {...register("mailingPhone")} />
            </div>

            {/* Gender & Marital */}
            <div className="col-md-6">
              <TextField select fullWidth label="Gender" defaultValue="" {...register("gender", { required: true })} error={!!errors.gender} helperText={errors.gender && "Required"}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </div>
            <div className="col-md-6">
              <TextField select fullWidth label="Marital Status" defaultValue="" {...register("maritalStatus", { required: true })}>
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
              </TextField>
            </div>

            {/* DOB & Birth Info */}
            <div className="col-md-6">
              <TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} {...register("dob", { required: true })} />
            </div>
            <div className="col-md-6">
              <TextField fullWidth label="City and Country of Birth" {...register("birthPlace", { required: true })} />
            </div>

            {/* Nationality */}
            <div className="col-md-6">
              <TextField fullWidth label="Present Nationality" {...register("presentNationality", { required: true })} />
            </div>
            <div className="col-md-6">
              <TextField fullWidth label="Nationality at Birth" {...register("birthNationality")} />
            </div>

            {/* Ethnic & Religion */}
            <div className="col-md-6">
              <TextField fullWidth label="Race/Ethnic/Tribal Group" {...register("ethnicGroup")} />
            </div>
            <div className="col-md-6">
              <TextField fullWidth label="Religion" {...register("religion")} />
            </div>

            {/* Immigration Court */}
            <div className="col-md-12">
              <FormControl component="fieldset">
                <FormLabel component="legend">Immigration Court Proceedings</FormLabel>
                <RadioGroup row aria-label="courtStatus" defaultValue="never">
                  <FormControlLabel value="never" control={<Radio {...register("courtStatus")} />} label="Never" />
                  <FormControlLabel value="currently" control={<Radio {...register("courtStatus")} />} label="Currently" />
                  <FormControlLabel value="past" control={<Radio {...register("courtStatus")} />} label="Past" />
                </RadioGroup>
              </FormControl>
            </div>

            {/* Departure & Entry */}
            <div className="col-md-6">
              <TextField fullWidth type="date" label="Date you last left your country" InputLabelProps={{ shrink: true }} {...register("lastLeftCountry")} />
            </div>
            <div className="col-md-6">
              <TextField fullWidth label="Current I-94 Number" {...register("i94Number")} />
            </div>
            <div className="col-md-12">
              <TextField fullWidth label="Last U.S. Entry (Date, Place, Status)" placeholder="mm/dd/yyyy, Place, Status" {...register("lastEntry")} />
            </div>

            {/* Passport */}
            <div className="col-md-4">
              <TextField fullWidth label="Country that issued passport" {...register("passportCountry")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Passport Number" {...register("passportNumber")} />
            </div>
            <div className="col-md-4">
              <TextField fullWidth label="Expiration Date" type="date" InputLabelProps={{ shrink: true }} {...register("passportExpiry")} />
            </div>

            {/* Languages */}
            <div className="col-md-12">
              <TextField fullWidth label="Native Language (include dialect)" {...register("nativeLanguage")} />
            </div>
            <div className="col-md-6">
              <TextField select fullWidth label="Are you fluent in English?" defaultValue="" {...register("fluentEnglish")}> 
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </div>
            <div className="col-md-12">
              <TextField fullWidth label="Other languages you speak fluently" {...register("otherLanguages")} />
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-end">
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default PersonalInfoForm;
