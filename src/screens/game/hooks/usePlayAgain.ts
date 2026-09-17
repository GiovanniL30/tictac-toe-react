import { useMutation, useQueryClient } from "@tanstack/react-query";

import { roomKeys } from "../../../api/queryKeys";
import { roomsApi } from "../../../api/roomsApi";

export function usePlayAgain() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: roomsApi.playAgain,
    onSuccess: (round) => {
      void queryClient.invalidateQueries({
        queryKey: roomKeys.detail(round.roomCode),
      });
    },
  });
}
