import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor that injects the token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
