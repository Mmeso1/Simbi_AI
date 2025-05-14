// src/store/chatStore.ts
import { create } from "zustand";

export type ChatMessage = {
  from: "user" | "assistant";
  text: string;
};

type ChatState = {
  chatId: string;
  prompt: string;
  responses: ChatMessage[];
  display: boolean;

  setChatId: (chatId: string) => void;
  addResponse: (msg: ChatMessage) => void;
  setDisplay: (display: boolean) => void;
  clearChat: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  chatId: "",
  prompt: "",
  responses: [],
  display: false,

  setChatId: (id) => set(() => ({ chatId: id })),

  // add a new response bubble (user or AI)
  addResponse: (msg) =>
    set((state) => ({
      responses: [...state.responses, msg],
    })),

  // set the display state of the chat input
  setDisplay: (display) =>
    set(() => ({
      display,
    })),

  // clear entire chat (prompt and responses)
  clearChat: () =>
    set(() => ({
      chatId: "",
      prompt: "",
      responses: [],
    })),
}));
