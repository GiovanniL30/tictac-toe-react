import { useQuery } from "@tanstack/react-query";

import { gameApi } from "../../../api/gameApi";
import { gameKeys } from "../../../api/queryKeys";

export function useGame(roomCode: string) {
  return useQuery({
    queryKey: gameKeys.detail(roomCode),
    queryFn: () => gameApi.getGame(roomCode),
    enabled: Boolean(roomCode),
  });
}
