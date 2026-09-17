import { useQuery } from "@tanstack/react-query";

import { gamesApi } from "../../../api/gamesApi";
import { gameKeys } from "../../../api/queryKeys";

export const useGame = (gameId: string) => {
  return useQuery({
    queryKey: gameKeys.detail(gameId),
    queryFn: () => gamesApi.get(gameId),
    enabled: Boolean(gameId),
    staleTime: Infinity,
  });
};
