const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://refugee-api.herokuapp.com/"
    : "http://localhost:8000";
const authURL = `${baseURL}/auth`;
const apiURL = `${baseURL}/api`;

export { baseURL, authURL, apiURL };
