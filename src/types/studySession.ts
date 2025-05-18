export interface Session {
  status: string;
  message: string;
  data: SessionData[];
}
export interface SessionData {
  id: string;
  userId: string;
  studyPlanId: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  topic: string;
  notes: string;
  completed: boolean;
}
