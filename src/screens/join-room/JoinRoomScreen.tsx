import { BackButton } from "../../components/navigation/BackButton";
import { useAppStore } from "../../store/useAppStore";

export function JoinRoomScreen() {
  const goTo = useAppStore((state) => state.goTo);

  return (
    <main data-screen="join-room">
      <BackButton onClick={() => goTo("home")} />
      {/* The join-room form will be composed here. */}
    </main>
  );
}
