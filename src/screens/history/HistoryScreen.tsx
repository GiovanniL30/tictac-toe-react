import { BackButton } from "../../components/navigation/BackButton";
import { useAppStore } from "../../store/useAppStore";

export function HistoryScreen() {
  const goTo = useAppStore((state) => state.goTo);

  return (
    <main data-screen="history">
      <BackButton onClick={() => goTo("home")} />
      {/* History list, detail, and replay states are composed here. */}
    </main>
  );
}
