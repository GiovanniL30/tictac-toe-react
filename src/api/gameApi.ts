import type {
  AddMoveInput,
  BoardState,
  Player,
  SaveMoveInput,
} from "../types/game";
import { gameClient, recordsClient } from "./client";

interface MessageResponse {
  msg: string;
}

interface PlayersResponse extends MessageResponse {
  players: Player[];
}

export const gameApi = {
  getGame: (roomCode: string) =>
    gameClient.get<BoardState>(`/games/${encodeURIComponent(roomCode)}`),

  addMove: ({ roomCode, mark, row, column }: AddMoveInput) =>
    gameClient.post<void>(`/games/${encodeURIComponent(roomCode)}/moves`, {
      mark,
      row,
      column,
    }),

  resetGame: (roomCode: string, keepalive = false) =>
    gameClient.post<void>(
      `/games/${encodeURIComponent(roomCode)}/reset`,
      undefined,
      { keepalive },
    ),

  saveMove: (input: SaveMoveInput) =>
    recordsClient.post<MessageResponse>("/games", input),

  getPlayers: (roomCode: string) =>
    recordsClient.get<PlayersResponse>(
      `/data/players/${encodeURIComponent(roomCode)}`,
    ),
};
