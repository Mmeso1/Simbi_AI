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
  percentage: number;
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

export interface Milestone {
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
  deleteStudy: (id: string) => Promise<void>;
  updateStudy: (id: string, updatedData: Study) => Promise<void>;
}

export type { Study, studyStore };
