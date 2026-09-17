# Tic-Tac-Toe React migration scaffold

This project defines the future React and TypeScript structure without
implementing the complete game behavior or design yet.

## Stack

- React, TypeScript, and Vite
- Tailwind CSS
- Zustand for internal screen navigation and session state
- TanStack Query for REST requests and server-owned state
- WebSocket adapter for live game events

## Structure

```text
src/
|-- api/                             # HTTP client, API calls, query keys
|-- components/                      # Shared by multiple screens
|   |-- feedback/Toast.tsx
|   |-- navigation/BackButton.tsx
|   `-- ui/
|       |-- Button.tsx
|       |-- Modal.tsx
|       `-- TextInput.tsx
|-- screens/
|   |-- home/
|   |   `-- HomeScreen.tsx
|   |-- create-room/
|   |   |-- hooks/useCreateRoom.ts
|   |   `-- CreateRoomScreen.tsx
|   |-- join-room/
|   |   |-- hooks/useJoinRoom.ts
|   |   `-- JoinRoomScreen.tsx
|   |-- waiting-room/
|   |   `-- WaitingRoomScreen.tsx
|   |-- game/
|   |   |-- components/
|   |   |   |-- Board.tsx
|   |   |   `-- Scoreboard.tsx
|   |   |-- hooks/
|   |   |   |-- useAddMove.ts
|   |   |   |-- useGame.ts
|   |   |   `-- useGameSocket.ts
|   |   `-- GameScreen.tsx
|   `-- history/
|       |-- hooks/useGameHistory.ts
|       `-- HistoryScreen.tsx
|-- store/useAppStore.ts
|-- types/
|-- websocket/
|-- App.tsx
|-- config.ts
|-- index.css
`-- main.tsx
```

## Colocation rule

A full application state belongs in `screens/`. Each screen has its own folder
so it can grow without turning into one long file. Components, hooks, helpers,
and types used only by that screen should be placed inside its folder.

Code moves to a top-level folder only when it is genuinely shared:

- `components/` contains UI used by multiple screens, such as Button or Modal.
- `api/` contains the backend access layer so components never call `fetch`.
- `store/` contains cross-screen client/session state.
- `types/` contains contracts shared by API, store, and multiple screens.
- `websocket/` contains transport code independent of a specific screen render.

Screens do not imply URL routes. `App.tsx` selects a screen using the Zustand
`screen` value.

## State ownership

Zustand stores client-owned state that crosses screen boundaries. Form values,
modal visibility, selections, and animation state should stay local to their
screen unless another screen needs them.

TanStack Query stores backend-owned state such as the board, players, scores,
and history. Screen-specific hooks live beside the screen. WebSocket events
update the same query cache rather than duplicating server state in Zustand.

The endpoint paths and WebSocket event DTOs remain placeholders until the final
Spring Boot contract is available. If Spring uses STOMP/SockJS, the transport
under `websocket/` can be replaced without reorganizing the screens.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```
