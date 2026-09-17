import { BackButton } from "../../components/navigation/BackButton";
import { useAppStore } from "../../store/useAppStore";

export function WaitingRoomScreen() {
  const goTo = useAppStore((state) => state.goTo);

  return (
    <main data-screen="waiting-room">
      <BackButton onClick={() => goTo("home")} />
      {/* Room code and player-presence state will be rendered here. */}
    </main>
  );
}
