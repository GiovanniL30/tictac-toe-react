import { useQuery } from "@tanstack/react-query";

import { historyApi } from "../../../api/historyApi";
import { historyKeys } from "../../../api/queryKeys";

export function useGameHistory() {
  return useQuery({
    queryKey: historyKeys.games(),
    queryFn: historyApi.getGames,
  });
}

export function useRecordedMoves(gameId: string | undefined) {
  return useQuery({
    queryKey: historyKeys.moves(gameId ?? ""),
    queryFn: () => historyApi.getMoves(gameId ?? ""),
    enabled: Boolean(gameId),
  });
}
