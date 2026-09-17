export type PlayerMark = "X" | "O";
export type PlayerRole = PlayerMark | "spectator";
export type CellValue = PlayerMark | null;
export type GameResult = PlayerMark | "DRAW" | null;

export interface BoardState {
  roomCode: string;
  cells: CellValue[];
  currentTurn: PlayerMark;
  result: GameResult;
}

export interface Player {
  playerId: string;
  score: number;
  streakCount: number;
  symbol: PlayerMark;
}

export interface AddMoveInput {
  roomCode: string;
  mark: PlayerMark;
  row: number;
  column: number;
}

export interface SaveMoveInput {
  gameId: string;
  roomCode: string;
  symbol: PlayerMark;
  location: number;
  playerId: string;
  dateSave: string;
}

export interface EnterRoomInput {
  roomCode: string;
  playerName: string;
}

export interface EnterRoomResult {
  roomCode: string;
  gameId: string;
  role: PlayerRole;
}

export interface GameSession extends EnterRoomResult {
  playerName: string;
}

export type GameSocketEvent =
  | { type: "BOARD_UPDATED"; payload: BoardState }
  | { type: "PLAYER_JOINED"; payload: Player }
  | { type: "PLAYER_LEFT"; payload: { playerId: string } }
  | { type: "GAME_RESET"; payload: { roomCode: string } }
  | { type: "GAME_ENDED"; payload: { result: Exclude<GameResult, null> } };

export type GameSocketCommand =
  | { type: "SUBSCRIBE"; payload: { roomCode: string } }
  | { type: "UNSUBSCRIBE"; payload: { roomCode: string } };
