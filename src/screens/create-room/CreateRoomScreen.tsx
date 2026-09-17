import { BackButton } from "../../components/navigation/BackButton";
import { useAppStore } from "../../store/useAppStore";

export function CreateRoomScreen() {
  const goTo = useAppStore((state) => state.goTo);

  return (
    <main data-screen="create-room">
      <BackButton onClick={() => goTo("home")} />
      {/* The create-room form will be composed here. */}
    </main>
  );
}
