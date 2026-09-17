import type { EnterRoomInput, EnterRoomResult } from "../types/game";
import { gameClient } from "./client";

export const lobbyApi = {
  createRoom: (input: EnterRoomInput) =>
    gameClient.post<EnterRoomResult>("/rooms", input),

  joinRoom: ({ roomCode, playerName }: EnterRoomInput) =>
    gameClient.post<EnterRoomResult>(
      `/rooms/${encodeURIComponent(roomCode)}/players`,
      { playerName },
    ),
};
