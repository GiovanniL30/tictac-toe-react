import type {
  GameSummary,
  HistoryResponse,
  RecordedMove,
} from "../types/history";
import { recordsClient } from "./client";

export const historyApi = {
  getGames: () => recordsClient.get<HistoryResponse<GameSummary>>("/games"),
  getPlayerGames: (playerId: string) =>
    recordsClient.get<HistoryResponse<GameSummary>>(
      `/players/${encodeURIComponent(playerId)}/games`,
    ),
  getMoves: (gameId: string) =>
    recordsClient.get<HistoryResponse<RecordedMove>>(
      `/games/${encodeURIComponent(gameId)}`,
    ),
};
