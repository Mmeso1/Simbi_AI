import { create } from "zustand";
import { registerUser, loginUser } from "@/api/auth";
import { RegisterData, LoginData, AuthResponse, User } from "@/types/auth";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;

  register: (data: RegisterData, callback: () => void) => Promise<void>;
  login: (data: LoginData, callback: () => void) => Promise<void>;
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
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Registration failed" });
      console.error("Registration error:", err);
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

      // Store tokens and user info
      set({
        accessToken: access_token,
        refreshToken: refresh_token,
        user: { email: data.email },
      });
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      callback();
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Login failed" });
      console.error("Login error:", err);
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ user: null, accessToken: null, refreshToken: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
}));

export default useAuthStore;
