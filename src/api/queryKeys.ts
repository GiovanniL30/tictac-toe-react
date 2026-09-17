export const gameKeys = {
  all: ["game"] as const,
  detail: (roomCode: string) => [...gameKeys.all, roomCode] as const,
};

export const historyKeys = {
  all: ["history"] as const,
  games: () => [...historyKeys.all, "games"] as const,
  playerGames: (playerId: string) =>
    [...historyKeys.games(), "player", playerId] as const,
  moves: (gameId: string) =>
    [...historyKeys.games(), gameId, "moves"] as const,
};
