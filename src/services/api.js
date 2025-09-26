import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-app-kiranadukaan.onrender.com/api", // your Spring Boot backend
});

export default api;
