import { useAppStore } from "../../store/useAppStore";
import { useGameRealtime } from "../../websocket/useGameRealtime";

export function GameScreen() {
  const session = useAppStore((state) => state.session);
  const connectionStatus = useGameRealtime(session?.roomCode);

  return (
    <main
      data-connection-status={connectionStatus}
      data-game-id={session?.gameId}
      data-room-code={session?.roomCode}
      data-screen="game"
    >
      {/* Board, scoreboard, actions, and game dialogs are composed here. */}
    </main>
  );
}
