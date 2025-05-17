import axios from "./axios";
import { Session, SessionData } from "@/types/studySession";

export const getStudySessions = async (
  planId: string
): Promise<SessionData[]> => {
  const resp = await axios.get<Session>(`/study-plan/${planId}/sessions`);
  return resp.data.data;
};
