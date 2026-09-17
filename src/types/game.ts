export type PlayerSymbol = "X" | "O";
export type PlayerType = "PLAYER" | "SPECTATOR";
export type GameStatus =
  | "WAITING_FOR_PLAYERS"
  | "IN_PROGRESS"
  | "COMPLETED";
export type BoardCell = PlayerSymbol | null;
export type BoardGrid = BoardCell[][];

export interface Player {
  playerName: string;
  score: number;
  symbol: PlayerSymbol | null;
  type: PlayerType;
}

export interface CreateRoomInput {
  playerName: string;
}

export interface JoinRoomInput {
  roomCode: string;
  playerName: string;
}

interface EnterRoomResponse {
  message: string;
  gameId: string;
  player: Player;
}

export interface CreateRoomResponse extends EnterRoomResponse {
  roomCode: string;
}

export type JoinRoomResponse = EnterRoomResponse;

export interface LeaveRoomInput {
  roomCode: string;
  playerName: string;
}

export interface MessageResponse {
  message: string;
}

export interface PlayAgainResponse extends MessageResponse {
  roomCode: string;
  gameId: string;
  currentRound: number;
  currentTurn: PlayerSymbol;
}

export interface GameDetails extends MessageResponse {
  players: Player[];
  roomCode: string;
  gameId: string;
  round: number;
  currentTurn: PlayerSymbol | null;
  spectatorCount: number;
  status: GameStatus;
  winner: string | "DRAW" | null;
}

export interface BoardState extends MessageResponse {
  gameId: string;
  grid: BoardGrid;
  currentTurn: PlayerSymbol | null;
  status: GameStatus;
}

export interface AddMoveInput {
  gameId: string;
  x: number;
  y: number;
  symbol: PlayerSymbol;
}

export type AddMoveResponse = BoardState;

export interface GameSession {
  roomCode: string;
  gameId: string;
  player: Player;
}
