import type {
  AddMoveInput,
  AddMoveResponse,
  BoardState,
  GameDetails,
} from "../types/game";
import type { GameMovesResponse } from "../types/history";
import { apiClient } from "./client";

export const gamesApi = {
  get: (gameId: string) =>
    apiClient.get<GameDetails>(`/games/${encodeURIComponent(gameId)}`),

  getBoard: (gameId: string) =>
    apiClient.get<BoardState>(`/games/${encodeURIComponent(gameId)}/board`),

  getMoves: (gameId: string) =>
    apiClient.get<GameMovesResponse>(
      `/games/${encodeURIComponent(gameId)}/moves`,
    ),

  addMove: ({ gameId, x, y, symbol }: AddMoveInput) =>
    apiClient.post<AddMoveResponse>(
      `/games/${encodeURIComponent(gameId)}/move`,
      { x, y, symbol },
    ),
};
