function readEnvironmentValue(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export const config = {
  gameApiUrl: readEnvironmentValue(
    import.meta.env.VITE_GAME_API_URL,
    "http://localhost:8080/tictactoe/tictactoeserver",
  ),
  recordsApiUrl: readEnvironmentValue(
    import.meta.env.VITE_RECORDS_API_URL,
    "http://localhost:8080/tictactoe-webservice/api",
  ),
  webSocketUrl: readEnvironmentValue(
    import.meta.env.VITE_WEBSOCKET_URL,
    "ws://localhost:8080/tictactoe-webservice/ws",
  ),
} as const;
