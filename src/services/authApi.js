import axios from "axios";

const authApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  Authorization : `Bearer ${localStorage.getItem("access_token")}`
});

export default authApi;