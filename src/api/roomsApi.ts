import type {
  CreateRoomInput,
  CreateRoomResponse,
  JoinRoomInput,
  JoinRoomResponse,
  LeaveRoomInput,
  MessageResponse,
  PlayAgainResponse,
} from "../types/game";
import type {
  RoomResponse,
  RoomsResponse,
} from "../types/history";
import { apiClient } from "./client";

export const roomsApi = {
  list: () => apiClient.get<RoomsResponse>("/rooms"),

  get: (roomCode: string) =>
    apiClient.get<RoomResponse>(`/rooms/${encodeURIComponent(roomCode)}`),

  create: (input: CreateRoomInput) =>
    apiClient.post<CreateRoomResponse>("/rooms", input),

  join: ({ roomCode, playerName }: JoinRoomInput) =>
    apiClient.post<JoinRoomResponse>(
      `/rooms/${encodeURIComponent(roomCode)}/join`,
      { playerName },
    ),

  leave: ({ roomCode, playerName }: LeaveRoomInput) =>
    apiClient.post<MessageResponse>(
      `/rooms/${encodeURIComponent(roomCode)}/leave/${encodeURIComponent(playerName)}`,
    ),

  playAgain: (roomCode: string) =>
    apiClient.post<PlayAgainResponse>(
      `/rooms/${encodeURIComponent(roomCode)}/play-again`,
    ),
};
