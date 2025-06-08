const PassportDetails= {
  userId: null,
  userName: '',
  userEmail: '',

  // Passport Document File Metadata
  passportFileType: '',
  passportFileSize: 0,

  // Birth Certificate Document File Metadata
  birthCertificateFileType: '',
  birthCertificateFileSize: 0,

  // Passport Details
  passportNumber: '',
  passportFirstName: '',
  passportLastName: '',
  passportGender: '',
  passportDob: '', // ISO format string (e.g., '1990-01-01')
  passportCountryOfBirth: '',
  passportNationality: '',
  passportIssuedBy: '',
  passportIssueDate: '', // ISO format string
  passportExpiryDate: '', // ISO format string
  passportLanguage: '',
};

export default PassportDetails;
