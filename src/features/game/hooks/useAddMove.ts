import { useMutation, useQueryClient } from "@tanstack/react-query";

import { gamesApi } from "../../../api/gamesApi";
import { gameKeys } from "../../../api/queryKeys";

export const useAddMove = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: gamesApi.addMove,
    onSuccess: (board) => {
      queryClient.setQueryData(gameKeys.board(board.gameId), board);
    },
  });
};
