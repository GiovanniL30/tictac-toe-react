import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { gameKeys } from "../../../api/queryKeys";
import { createGameSocket } from "../../../websocket/gameSocket";
import type { WebSocketStatus } from "../../../websocket/WebSocketClient";

export function useGameSocket(roomCode: string | undefined) {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<WebSocketStatus>("idle");

  useEffect(() => {
    if (!roomCode) return;

    const socket = createGameSocket(roomCode);
    const unsubscribeStatus = socket.onStatusChange(setStatus);
    const unsubscribeMessage = socket.onMessage((event) => {
      if (event.type === "BOARD_UPDATED") {
        queryClient.setQueryData(gameKeys.detail(roomCode), event.payload);
      } else {
        void queryClient.invalidateQueries({
          queryKey: gameKeys.detail(roomCode),
        });
      }
    });

    socket.connect();

    return () => {
      unsubscribeMessage();
      unsubscribeStatus();
      socket.disconnect();
    };
  }, [queryClient, roomCode]);

  return status;
}
