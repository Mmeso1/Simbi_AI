export interface Study {
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
  percentage: number;

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

export type ViewFilter = "day" | "week" | "month";

export type UserData = {
  createdAt: string;
  educationLevel: string | null;
  email: string;
  firstName: string;
  id: string;
  lastLogin: string | null;
  lastName: string;
  preAssesmentQuestions: null;
  preferredStudyMethod: null;
  timezone: string;
  username: string;
};
