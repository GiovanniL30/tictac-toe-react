import { config } from "../config";
import type { GameSocketCommand, GameSocketEvent } from "../types/game";
import { WebSocketClient } from "./WebSocketClient";

export function createGameSocket(roomCode: string) {
  const url = `${config.webSocketUrl}/games/${encodeURIComponent(roomCode)}`;
  return new WebSocketClient<GameSocketEvent, GameSocketCommand>(url);
}
