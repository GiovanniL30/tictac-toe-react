import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { GameSession } from "../types/game";

export type AppScreen =
  | "home"
  | "create-room"
  | "join-room"
  | "waiting-room"
  | "game"
  | "history";

interface AppStore {
  screen: AppScreen;
  session: GameSession | null;
  goTo: (screen: AppScreen) => void;
  startGame: (session: GameSession) => void;
  leaveGame: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      screen: "home",
      session: null,
      goTo: (screen) => set({ screen }),
      startGame: (session) => set({ screen: "game", session }),
      leaveGame: () => set({ screen: "home", session: null }),
    }),
    {
      name: "tictactoe-session",
      partialize: ({ session }) => ({ session }),
    },
  ),
);
