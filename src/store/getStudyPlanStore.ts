import { create } from "zustand";
import axios from "axios";
import { Study, studyStore } from "@/types/studyPlan";

export const useGetStudyPlanStore = create<studyStore>((set) => ({
  isLoading: false,
  studies: [],
  error: null,

  fetchStudies: async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      set({ error: "Access token is missing", isLoading: false });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(
        "https://simbi-backend.onrender.com/api/v1/study-plan/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Fetched study plans:", response.data.data);

      set({ studies: response.data.data, isLoading: false });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({
          error:
            error.response?.data?.message ||
            error.message ||
            "Something went wrong",
          isLoading: false,
        });
      } else if (error instanceof Error) {
        set({
          error: error.message,
          isLoading: false,
        });
      } else {
        set({
          error: "An unknown error occurred",
          isLoading: false,
        });
      }
    }
  },

  deleteStudy: async (id: string) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      set({ error: "Access token is missing" });
      return;
    }

    try {
      await axios.delete(
        `https://simbi-backend.onrender.com/api/v1/study-plan/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => ({
        studies: state.studies.filter((study) => study.id !== id),
      }));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({
          error:
            error.response?.data?.message ||
            error.message ||
            "Failed to delete study plan",
        });
      } else if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: "An unknown error occurred" });
      }
    }
  },

  updateStudy: async (id: string, updatedData: Study) => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      set({ error: "Access token is missing" });
      return;
    }

    try {
      const response = await axios.put(
        `https://simbi-backend.onrender.com/api/v1/study-plan/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => ({
        studies: state.studies.map((study) =>
          study.id === id ? response.data.data : study
        ),
      }));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        set({
          error:
            error.response?.data?.message ||
            error.message ||
            "Failed to update study plan",
        });
      } else if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: "An unknown error occurred" });
      }
    }
  },
}));
