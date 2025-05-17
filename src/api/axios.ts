import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api/v1";

const safeGetItem = (key: string) => {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
  } catch {
    console.error(`Failed to get ${key}`);
  }
  return null;
};
const safeSetItem = (key: string, val: string) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, val);
    }
  } catch {
    console.error(`Failed to set ${key}`);
  }
};

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

// inject accessToken into every request
axiosInstance.interceptors.request.use((config) => {
  let token = safeGetItem("accessToken");
  if (!token && typeof document !== "undefined") {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("accessToken="));
    token = cookie ? cookie.split("=")[1] : null;
  }
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// **NEW**: intercept 401s, refresh & retry once
axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const orig = err.config;
    // only retry once
    if (err.response?.status === 401 && !orig._retry) {
      orig._retry = true;
      try {
        // call refresh endpoint (no auth header needed)
        const { data } = await axios.post(
          `${baseURL}/auth/refresh`,
          {},
          {
            withCredentials: true,
          }
        );
        const newToken = data.accessToken;
        safeSetItem("accessToken", newToken);

        orig.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(orig);
      } catch {
        window.location.href = "/auth/signin";
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
