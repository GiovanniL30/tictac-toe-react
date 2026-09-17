import type { PlayerMark } from "./game";

export interface RecordedMove {
  gameId: string;
  playerId: string;
  symbol: PlayerMark;
  location: number;
  dateSaved: string;
}

export interface GameSummary {
  gameId: string;
  roomCode: string;
  playedAt: string;
}

export interface HistoryResponse<T> {
  msg: string;
  list: T[];
}
