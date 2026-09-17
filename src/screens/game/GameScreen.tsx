import { useAppStore } from "../../store/useAppStore";
import { useGameSocket } from "./hooks/useGameSocket";

export function GameScreen() {
  const roomCode = useAppStore((state) => state.session?.roomCode);
  const connectionStatus = useGameSocket(roomCode);

  return (
    <main
      data-connection-status={connectionStatus}
      data-room-code={roomCode}
      data-screen="game"
    >
      {/* Board, scoreboard, actions, and game dialogs are composed here. */}
    </main>
  );
}
