import { create } from "zustand";
import { AllChatsResponse, ChatMessagesResponse } from "@/types/chatMessage";

type HistoryState = {
  chats: AllChatsResponse["chats"];
  messages: Record<string, ChatMessagesResponse["messages"]>;
  setChats: (chats: AllChatsResponse["chats"]) => void;
  setMessages: (
    chatId: string,
    messages: ChatMessagesResponse["messages"]
  ) => void;
  clear: () => void;
};

export const useHistoryStore = create<HistoryState>((set) => ({
  chats: [],
  messages: {},

  setChats: (chats) => set({ chats }),
  setMessages: (chatId, msgs) =>
    set((state) => ({ messages: { ...state.messages, [chatId]: msgs } })),

  clear: () => set({ chats: [], messages: {} }),
}));
