function readEnvironmentValue(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export const config = {
  apiUrl: readEnvironmentValue(
    import.meta.env.VITE_API_URL,
    "http://localhost:8080/api/v1",
  ),
  webSocketUrl: readEnvironmentValue(
    import.meta.env.VITE_WEBSOCKET_URL,
    "ws://localhost:8080/ws",
  ),
} as const;
