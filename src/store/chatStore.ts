// src/store/chatStore.ts
import { create } from "zustand";

export type ChatMessage = {
  from: "user" | "ai";
  text: string;
};

type ChatState = {
  prompt: string;
  responses: ChatMessage[];
  display: boolean;
  setPrompt: (text: string) => void;
  addResponse: (msg: ChatMessage) => void;
  setDisplay: (display: boolean) => void;
  clearChat: () => void;
};

export const useChatStore = create<ChatState>((set) => ({
  prompt: "",
  responses: [],
  display: false,

  setPrompt: (text) =>
    set(() => ({
      prompt: text,
      responses: [],
    })),

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
      prompt: "",
      responses: [],
    })),
}));
