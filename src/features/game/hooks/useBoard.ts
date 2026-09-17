import { useQuery } from "@tanstack/react-query";

import { gamesApi } from "../../../api/gamesApi";
import { gameKeys } from "../../../api/queryKeys";

export const useBoard = (gameId: string) => {
  return useQuery({
    queryKey: gameKeys.board(gameId),
    queryFn: () => gamesApi.getBoard(gameId),
    enabled: Boolean(gameId),
    staleTime: Infinity,
  });
};
