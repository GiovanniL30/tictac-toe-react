import { useMutation, useQueryClient } from "@tanstack/react-query";

import { gameApi } from "../../../api/gameApi";
import { gameKeys } from "../../../api/queryKeys";

export function useAddMove() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: gameApi.addMove,
    onSuccess: (_data, { roomCode }) =>
      queryClient.invalidateQueries({ queryKey: gameKeys.detail(roomCode) }),
  });
}
