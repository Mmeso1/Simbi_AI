export interface PromptPayload {
  content: string;
  chatId: string;
}

export interface ChatMessageAPI {
  id: string;
  content: string;
  role: "user" | "assistant";
  createdAt: string;
  chatId: string;
}

export interface ChatResponse {
  success: boolean;
  chat: {
    id: string;
    title: string;
  };
  userMessage: ChatMessageAPI;
  aiMessage: ChatMessageAPI;
}

export interface ChatSummary {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  messages: ChatMessageAPI[];
}

export interface AllChatsResponse {
  success: boolean;
  chats: ChatSummary[];
  pagination: { page: number; limit: number };
}

export interface ChatMessagesResponse {
  success: boolean;
  chatId: string;
  messages: ChatMessageAPI[];
}
