const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://refugee-api.herokuapp.com/"
    : "http://localhost:8000";
//adjust to look at deployed
const authURL = `${baseURL}/auth`;
const apiURL = `${baseURL}/api`;

export { baseURL, authURL, apiURL };
