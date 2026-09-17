import { Button } from "../../components/ui/Button";
import { useAppStore } from "../../store/useAppStore";

export function HomeScreen() {
  const goTo = useAppStore((state) => state.goTo);

  return (
    <main data-screen="home">
      <Button onClick={() => goTo("create-room")}>Create room</Button>
      <Button onClick={() => goTo("join-room")}>Join room</Button>
      <Button onClick={() => goTo("history")}>History</Button>
    </main>
  );
}
