// Response interfaces
export interface ChatResponse {
  success: boolean;
  chat: Chat;
  userMessage: Message;
  aiMessage: Message;
}

export interface Chat {
  id: string;
  title: string;
}

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  createdAt: string;
  chatId: string;
}
