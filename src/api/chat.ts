import axios from "./axios";
import {
  AllChatsResponse,
  ChatMessagesResponse,
  ChatResponse,
  PromptPayload,
} from "@/types/chatMessage";

export const sendPrompt = async (
  payload: PromptPayload
): Promise<ChatResponse> => {
  const response = await axios.post("/chat/message", payload);
  return response.data;
};

export const getAllChats = async (): Promise<AllChatsResponse> => {
  const response = await axios.get("/chat");
  return response.data;
};

export const getChatMessages = async (
  chatId: string
): Promise<ChatMessagesResponse> => {
  const response = await axios.get(`/chat/${chatId}`);
  return response.data;
};
