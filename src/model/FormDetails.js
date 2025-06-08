export class PersonalInfo {
  constructor({
    userId = "",
    passportNumber = "",
    passportCountry = "",
    passportIssueDate = "",
    passportExpiryDate = "",
    passportPlaceOfIssuance = "",
    aNumber = "",
    ssn = "",
    uscisNumber = "",
    lastName = "",
    firstName = "",
    middleName = "",
    otherNames = "",
    residenceAddress = "",
    residenceApt = "",
    residenceCity = "",
    residenceState = "",
    residenceZip = "",
    residencePhone = "",
    mailingCareOf = "",
    mailingStreet = "",
    mailingApt = "",
    mailingCity = "",
    mailingState = "",
    mailingZip = "",
    mailingPhone = "",
    gender = "",
    maritalStatus = "",
    dob = "",
    birthCityCountry = "",
    presentNationality = "",
    birthNationality = "",
    ethnicGroup = "",
    religion = "",
  } = {}) {
    this.userId = userId;
    this.aNumber = aNumber;
    this.passportNumber = passportNumber;
    this.ssn = ssn;
    this.uscisNumber = uscisNumber;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.otherNames = otherNames;
    this.residenceAddress = residenceAddress;
    this.residenceApt = residenceApt;
    this.residenceCity = residenceCity;
    this.residenceState = residenceState;
    this.residenceZip = residenceZip;
    this.residencePhone = residencePhone;
    this.mailingCareOf = mailingCareOf;
    this.mailingStreet = mailingStreet;
    this.mailingApt = mailingApt;
    this.mailingCity = mailingCity;
    this.mailingState = mailingState;
    this.mailingZip = mailingZip;
    this.mailingPhone = mailingPhone;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
    this.dob = dob;
    this.birthCityCountry = birthCityCountry;
    this.presentNationality = presentNationality;
    this.birthNationality = birthNationality;
    this.ethnicGroup = ethnicGroup;
    this.religion = religion;
  }
}

export class SpouseInfo {
  constructor({
    spouseANumber = "",
    spousePassportId = "",
    spouseDob = "",
    spouseSSN = "",
    spouseLastName = "",
    spouseFirstName = "",
    spouseMiddleName = "",
    spouseOtherNames = "",
    spouseMarriageDate = "",
    spouseMarriagePlace = "",
    spouseBirthPlace = "",
    spouseNationality = "",
    spouseRaceEthnicGroup = "",
    spouseGender = "",
    spouseInUS = "",
    spouseLastEntryPlace = "",
    spouseLastEntryDate = "",
    spouseI94Number = "",
    spouseAdmissionStatus = "",
    spouseCurrentStatus = "",
    spouseStayExpiration = "",
    spouseInCourt = "",
    spousePreviousArrival = "",
    spouseIncluded = "",
  } = {}) {
    this.spouseANumber = spouseANumber;
    this.spousePassportId = spousePassportId;
    this.spouseDob = spouseDob;
    this.spouseSSN = spouseSSN;
    this.spouseLastName = spouseLastName;
    this.spouseFirstName = spouseFirstName;
    this.spouseMiddleName = spouseMiddleName;
    this.spouseOtherNames = spouseOtherNames;
    this.spouseMarriageDate = spouseMarriageDate;
    this.spouseMarriagePlace = spouseMarriagePlace;
    this.spouseBirthPlace = spouseBirthPlace;
    this.spouseNationality = spouseNationality;
    this.spouseRaceEthnicGroup = spouseRaceEthnicGroup;
    this.spouseGender = spouseGender;
    this.spouseInUS = spouseInUS;
    this.spouseLastEntryPlace = spouseLastEntryPlace;
    this.spouseLastEntryDate = spouseLastEntryDate;
    this.spouseI94Number = spouseI94Number;
    this.spouseAdmissionStatus = spouseAdmissionStatus;
    this.spouseCurrentStatus = spouseCurrentStatus;
    this.spouseStayExpiration = spouseStayExpiration;
    this.spouseInCourt = spouseInCourt;
    this.spousePreviousArrival = spousePreviousArrival;
    this.spouseIncluded = spouseIncluded;
  }
}

  
export class ChildInfo {
  constructor({
    aNumber = "",
    passportNumber = "",
    maritalStatus = "",
    ssn = "",
    lastName = "",
    firstName = "",
    middleName = "",
    dob = "",
    birthPlace = "",
    nationality = "",
    raceEthnicity = "",
    gender = "",
    isInUS = "",
    usLocation = "",
    entryPlace = "",
    lastEntryDate = "",
    i94Number = "",
    statusWhenAdmitted = "",
    currentStatus = "",
    statusExpiry = "",
    isInCourtProceedings = "",
    isIncludedInApp = ""
  } = {}) {
    this.aNumber = aNumber;
    this.passportNumber = passportNumber;
    this.maritalStatus = maritalStatus;
    this.ssn = ssn;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.dob = dob;
    this.birthPlace = birthPlace;
    this.nationality = nationality;
    this.raceEthnicity = raceEthnicity;
    this.gender = gender;
    this.isInUS = isInUS;
    this.usLocation = usLocation;
    this.entryPlace = entryPlace;
    this.lastEntryDate = lastEntryDate;
    this.i94Number = i94Number;
    this.statusWhenAdmitted = statusWhenAdmitted;
    this.currentStatus = currentStatus;
    this.statusExpiry = statusExpiry;
    this.isInCourtProceedings = isInCourtProceedings;
    this.isIncludedInApp = isIncludedInApp;
  }
}

  
  export class FormDetails {
    constructor({
      personalInfo = new PersonalInfo(),
      spouseInfo = new SpouseInfo(),
      children = [],
    } = {}) {
      this.personalInfo = personalInfo;
      this.spouseInfo = spouseInfo;
      this.children = children;
    }
  }
  