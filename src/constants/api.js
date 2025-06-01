export const BASE_URL = 'https://asylum-be-xbk2.onrender.com';
// export const BASE_URL = 'http://localhost:8080';

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/auth/login`,
  LOGOUT: `${BASE_URL}/api/auth/logout`,
  PDFHANDLER: `${BASE_URL}/api/pdfHandler/fill`,
  REGISTER: `${BASE_URL}/api/register`,
  UPLOADDOCUMENT: `${BASE_URL}/api/documents/upload`
  // Add other endpoints as needed
};