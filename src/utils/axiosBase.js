import axios from "axios";
import { baseURL } from "./urls";

//* Adds BaseURL to axios instance
export default axios.create({
  baseURL,
});
