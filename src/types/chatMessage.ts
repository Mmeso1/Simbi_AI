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
