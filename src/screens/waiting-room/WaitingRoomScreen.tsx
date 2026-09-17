import { BackButton } from "../../components/navigation/BackButton";
import { useAppStore } from "../../store/useAppStore";
import { useGameRealtime } from "../../websocket/useGameRealtime";

export function WaitingRoomScreen() {
  const goTo = useAppStore((state) => state.goTo);
  const roomCode = useAppStore((state) => state.session?.roomCode);
  const connectionStatus = useGameRealtime(roomCode);

  return (
    <main
      data-connection-status={connectionStatus}
      data-room-code={roomCode}
      data-screen="waiting-room"
    >
      <BackButton onClick={() => goTo("home")} />
      {/* Room code and player-presence state will be rendered here. */}
    </main>
  );
}
