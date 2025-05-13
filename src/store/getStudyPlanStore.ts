import { create } from "zustand";
import axios from "axios";

interface Study {
  id: string;
  name: string;
  userId: string;
  status: string;
  difficultyLevel: string;
  totalHours: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  subjects: string[];

  planData: {
    tips: string[];
    rewards: Reward[];
    overview: Overview;
    milestones: Milestone[];
    schedule: DailySchedule[];
  };
}

interface Reward {
  reward: string;
  milestone: string;
}

interface Overview {
  name: string;
  duration: string; // e.g. "2025-05-15 to 2025-05-21"
  subjects: string[];
  difficulty: string;
  totalHours: number;
}

interface Milestone {
  completed: boolean;
  targetDate: string;
  description: string;
}

interface DailySchedule {
  date: string;
  dayOfWeek: string;
  sessions: Session[];
}

interface Session {
  topic: string;
  description: string;
  startTime: string;
  endTime: string;
  date: string;
  resources: string[];
}

interface studyStore {
  isLoading: boolean;
  error: string | null;
  studies: Study[];
  fetchStudies: () => Promise<void>;
}

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
}));
