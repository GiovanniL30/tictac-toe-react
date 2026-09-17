import { useQuery } from "@tanstack/react-query";

import { gamesApi } from "../../../api/gamesApi";
import { gameKeys, playerKeys, roomKeys } from "../../../api/queryKeys";
import { playersApi } from "../../../api/playersApi";
import { roomsApi } from "../../../api/roomsApi";

export const useRooms = () => {
  return useQuery({
    queryKey: roomKeys.list(),
    queryFn: roomsApi.list,
  });
};

export const useRoomGames = (roomCode: string | undefined) => {
  return useQuery({
    queryKey: roomKeys.detail(roomCode ?? ""),
    queryFn: () => roomsApi.get(roomCode ?? ""),
    enabled: Boolean(roomCode),
  });
};

export const usePlayers = () => {
  return useQuery({
    queryKey: playerKeys.list(),
    queryFn: playersApi.list,
  });
};

export const usePlayerGames = (playerName: string | undefined) => {
  return useQuery({
    queryKey: playerKeys.games(playerName ?? ""),
    queryFn: () => playersApi.getGames(playerName ?? ""),
    enabled: Boolean(playerName),
  });
};

export const useGameMoves = (gameId: string | undefined) => {
  return useQuery({
    queryKey: gameKeys.moves(gameId ?? ""),
    queryFn: () => gamesApi.getMoves(gameId ?? ""),
    enabled: Boolean(gameId),
  });
};
