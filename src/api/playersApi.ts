import type {
  PlayerGamesResponse,
  PlayersResponse,
} from "../types/history";
import { apiClient } from "./client";

export const playersApi = {
  list: () => apiClient.get<PlayersResponse>("/players"),

  getGames: (playerName: string) =>
    apiClient.get<PlayerGamesResponse>(
      `/players/${encodeURIComponent(playerName)}/games`,
    ),
};
