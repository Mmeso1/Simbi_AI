import { create } from "zustand";
import Cookies from "js-cookie";
import { registerUser, loginUser, fetchCurrentUser } from "@/api/auth";
import { RegisterData, LoginData, User, ApiError } from "@/types/auth";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;

  register: (data: RegisterData, callback: () => void) => Promise<void>;
  login: (data: LoginData, callback: () => void) => Promise<void>;
  getUser: () => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,

  register: async (data, callback) => {
    set({ loading: true, error: null });
    try {
      console.log("Registering user with data:", data);
      await registerUser(data);
      callback();
    } catch (err: unknown) {
      const apiError = err as ApiError;
      set({ error: apiError.response?.data?.message || "Registration failed" });
      console.log("Registration error:", apiError);
    } finally {
      set({ loading: false });
    }
  },

  login: async (data, callback) => {
    set({ loading: true, error: null });
    try {
      const res = await loginUser(data);
      console.log("API login response:", res.data);

      // Extract tokens from the response (API doesn't return user object)
      const { access_token, refresh_token } = res.data;

      Cookies.set("accessToken", access_token, {
        expires: 7, // cookie lives 7 days
        path: "/", // sent on all routes
        sameSite: "lax",
      });

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      // Store tokens
      set({
        accessToken: access_token,
        refreshToken: refresh_token,
      });

      // Get user info
      const userRes = await fetchCurrentUser();
      set({ user: userRes.data.user });
      console.log("API user response:", userRes.data);
      callback();
    } catch (err: unknown) {
      const apiError = err as ApiError;
      set({ error: apiError.response?.data?.message || "Login failed" });
      console.log("Login error:", apiError);
    } finally {
      set({ loading: false });
    }
  },
  getUser: async () => {
    try {
      const { data } = await fetchCurrentUser();
      set({ user: data.user });
    } catch {
      // token might be bad → force logout
      useAuthStore.getState().logout();
    }
  },
  logout: () => {
    set({ user: null, accessToken: null, refreshToken: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    Cookies.remove("accessToken", { path: "/" });
  },
}));

export default useAuthStore;
