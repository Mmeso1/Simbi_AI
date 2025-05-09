import { create } from "zustand";
import { registerUser, loginUser } from "@/api/auth";
import { RegisterData, LoginData, AuthResponse } from "@/types/auth";

interface AuthState {
  user: AuthResponse["user"] | null;
  access_token: string | null;
  refresh_token: string | null;
  loading: boolean;
  error: string | null;

  register: (data: RegisterData, callback: () => void) => Promise<void>;
  login: (data: LoginData, callback: () => void) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  access_token: null,
  refresh_token: null,
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
      const { user, access_token, refresh_token } = res.data;

      set({ user, access_token, refresh_token });
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      callback();
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Login failed" });
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ user: null, access_token: null, refresh_token: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
}));

export default useAuthStore;
