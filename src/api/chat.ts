import axios from "./axios";
import { ChatResponse, PromptPayload } from "@/types/chatMessage";

export const sendPrompt = async (
  payload: PromptPayload
): Promise<ChatResponse> => {
  const response = await axios.post("/chat/message", payload);
  return response.data;
};
