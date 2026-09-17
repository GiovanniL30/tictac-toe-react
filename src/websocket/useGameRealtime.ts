import { useQueryClient } from "@tanstack/react-query";
import type { Client, StompSubscription } from "@stomp/stompjs";
import { useEffect, useState } from "react";

import { gameKeys, playerKeys, roomKeys } from "../api/queryKeys";
import { useAppStore } from "../store/useAppStore";
import type {
  BoardState,
  GameDetails,
  PlayAgainResponse,
} from "../types/game";
import type { RoomResponse } from "../types/history";
import { createStompClient, readStompMessage } from "./stompClient";

export type RealtimeStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "disconnected"
  | "error";

export function useGameRealtime(roomCode: string | undefined) {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<RealtimeStatus>("idle");

  useEffect(() => {
    if (!roomCode) return;

    const client = createStompClient();
    let moveSubscription: StompSubscription | undefined;

    const subscribeToMoves = (gameId: string) => {
      moveSubscription?.unsubscribe();
      moveSubscription = client.subscribe(
        `/topic/games/${gameId}/move-placed`,
        (message) => {
          const board = readStompMessage<BoardState>(message);
          queryClient.setQueryData(gameKeys.board(board.gameId), board);
        },
      );
    };

    client.beforeConnect = async () => {
      setStatus("connecting");
    };

    client.onConnect = () => {
      setStatus("connected");

      client.subscribe(
        `/topic/rooms/${roomCode}/player-joined`,
        (message) => {
          const game = readStompMessage<GameDetails>(message);
          queryClient.setQueryData(gameKeys.detail(game.gameId), game);
          void queryClient.invalidateQueries({
            queryKey: roomKeys.detail(roomCode),
          });

          if (game.status === "IN_PROGRESS") {
            useAppStore.getState().goTo("game");
          }
        },
      );

      client.subscribe(
        `/topic/rooms/${roomCode}/game-completed`,
        (message) => {
          const game = readStompMessage<GameDetails>(message);
          queryClient.setQueryData(gameKeys.detail(game.gameId), game);
          void queryClient.invalidateQueries({
            queryKey: gameKeys.board(game.gameId),
          });
          void queryClient.invalidateQueries({ queryKey: roomKeys.all });
          void queryClient.invalidateQueries({ queryKey: playerKeys.all });
        },
      );

      client.subscribe(
        `/topic/rooms/${roomCode}/new-round-started`,
        (message) => {
          const round = readStompMessage<PlayAgainResponse>(message);
          useAppStore.getState().setGameId(round.gameId);
          subscribeToMoves(round.gameId);
          void queryClient.invalidateQueries({
            queryKey: roomKeys.detail(roomCode),
          });
        },
      );

      client.subscribe(
        `/topic/rooms/${roomCode}/game-deleted`,
        (message) => {
          readStompMessage<RoomResponse>(message);
          queryClient.removeQueries({ queryKey: roomKeys.detail(roomCode) });
          queryClient.removeQueries({ queryKey: gameKeys.all });
          useAppStore.getState().leaveGame();
        },
      );

      const gameId = useAppStore.getState().session?.gameId;
      if (gameId) subscribeToMoves(gameId);
    };

    client.onWebSocketClose = () => setStatus("disconnected");
    client.onWebSocketError = () => setStatus("error");
    client.onStompError = () => setStatus("error");
    client.activate();

    return () => {
      moveSubscription?.unsubscribe();
      void deactivate(client);
    };
  }, [queryClient, roomCode]);

  return status;
}

async function deactivate(client: Client) {
  await client.deactivate();
}
