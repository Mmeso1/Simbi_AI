import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api/v1";

// Helper function to safely access localStorage
const safeGetItem = (key: string) => {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  } catch (err) {
    console.error(`Failed to get ${key} from localStorage:`, err);
    return null;
  }
};

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor that injects the token
axiosInstance.interceptors.request.use((config) => {
  const token = safeGetItem("accessToken");
  console.log(
    "Interceptor retrieving token:",
    token ? token.substring(0, 10) + "..." : "null"
  );
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
    console.log("Authorization header set");
  }
  return config;
});

export default axiosInstance;
