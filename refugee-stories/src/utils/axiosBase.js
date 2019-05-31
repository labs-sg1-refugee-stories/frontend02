import axios from "axios";
import { baseURL } from "./urls";

//* Adds BaseURL to axios instance
const token = localStorage.getItem("jwt");
export default axios.create({
  baseURL,
});
