# Tic-Tac-Toe React migration scaffold

This is React and TypeScript structure for the unified Spring Boot
Tic-Tac-Toe service.

## Stack

- React, TypeScript, Vite, and Tailwind CSS
- Zustand for the active screen and current player session
- TanStack Query for REST state and mutations
- STOMP over native WebSocket for live room and game synchronization

## Structure

```text
src/
|-- assets/
|   |-- icons/
|   |   |-- actions/quit.svg
|   |   |-- results/{win,loss,draw}.svg
|   |   `-- status/streak.svg
|   |-- mascots/
|   |   |-- cat/{idle,crying,peeking}.svg
|   |   `-- dog/{idle,crying,peeking}.svg
|   `-- index.ts                     # Central asset registry
|-- api/
|   |-- client.ts
|   |-- gamesApi.ts
|   |-- playersApi.ts
|   |-- queryKeys.ts
|   `-- roomsApi.ts
|-- components/                      # Shared by multiple screens
|-- screens/
|   |-- home/HomeScreen.tsx
|   |-- create-room/
|   |   |-- hooks/useCreateRoom.ts
|   |   `-- CreateRoomScreen.tsx
|   |-- join-room/
|   |   |-- hooks/useJoinRoom.ts
|   |   `-- JoinRoomScreen.tsx
|   |-- waiting-room/
|   |   |-- hooks/
|   |   |   `-- useRoom.ts
|   |   `-- WaitingRoomScreen.tsx
|   |-- game/
|   |   |-- components/
|   |   |   |-- Board.tsx
|   |   |   `-- Scoreboard.tsx
|   |   |-- hooks/
|   |   |   |-- useAddMove.ts
|   |   |   |-- useBoard.ts
|   |   |   |-- useGame.ts
|   |   |   |-- useLeaveRoom.ts
|   |   |   `-- usePlayAgain.ts
|   |   `-- GameScreen.tsx
|   `-- history/
|       |-- hooks/useHistory.ts
|       `-- HistoryScreen.tsx
|-- store/useAppStore.ts
|-- types/
|-- websocket/
|   |-- stompClient.ts
|   `-- useGameRealtime.ts
|-- App.tsx
|-- config.ts
`-- main.tsx
```

Screen-only components and hooks stay inside their screen folder. The top-level
`components` folder contains only UI shared by multiple screens.
