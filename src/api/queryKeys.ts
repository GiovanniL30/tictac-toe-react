export const gameKeys = {
  all: ["games"] as const,
  detail: (gameId: string) => [...gameKeys.all, gameId] as const,
  board: (gameId: string) => [...gameKeys.detail(gameId), "board"] as const,
  moves: (gameId: string) => [...gameKeys.detail(gameId), "moves"] as const,
};

export const roomKeys = {
  all: ["rooms"] as const,
  list: () => [...roomKeys.all, "list"] as const,
  detail: (roomCode: string) => [...roomKeys.all, roomCode] as const,
};

export const playerKeys = {
  all: ["players"] as const,
  list: () => [...playerKeys.all, "list"] as const,
  games: (playerName: string) =>
    [...playerKeys.all, playerName, "games"] as const,
};
