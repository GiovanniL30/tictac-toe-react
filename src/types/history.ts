import type { GameStatus, PlayerSymbol } from "./game";

export interface RoomGameSummary {
  gameId: string;
  status: GameStatus;
  winner?: string | "DRAW" | null;
}

export interface RoomSummary {
  roomCode: string;
  games: RoomGameSummary[];
}

export interface RoomsResponse {
  totalRooms: number;
  totalGames: number;
  rooms: RoomSummary[];
}

export type RoomResponse = RoomSummary;

export interface Move {
  moveNumber: number;
  playerName: string;
  symbol: PlayerSymbol;
  x: number;
  y: number;
  playedAt: string;
}

export interface GameMovesResponse {
  gameId: string;
  roomCode: string;
  round: number;
  moves: Move[];
  result: {
    status: GameStatus;
    winner: string | "DRAW" | null;
  };
}

export interface PlayersResponse {
  totalPlayers: number;
  players: Array<{ playerName: string }>;
}

export interface PlayerGameSummary {
  roomCode: string;
  gameId: string;
  symbol: PlayerSymbol;
  won: boolean;
}

export interface PlayerGamesResponse {
  playerName: string;
  totalGames: number;
  games: PlayerGameSummary[];
}
