import { CreateRoomScreen } from "./screens/create-room/CreateRoomScreen";
import { GameScreen } from "./screens/game/GameScreen";
import { HistoryScreen } from "./screens/history/HistoryScreen";
import { HomeScreen } from "./screens/home/HomeScreen";
import { JoinRoomScreen } from "./screens/join-room/JoinRoomScreen";
import { WaitingRoomScreen } from "./screens/waiting-room/WaitingRoomScreen";
import { useAppStore } from "./store/useAppStore";

export default function App() {
  const screen = useAppStore((state) => state.screen);

  switch (screen) {
    case "home":
      return <HomeScreen />;
    case "create-room":
      return <CreateRoomScreen />;
    case "join-room":
      return <JoinRoomScreen />;
    case "waiting-room":
      return <WaitingRoomScreen />;
    case "game":
      return <GameScreen />;
    case "history":
      return <HistoryScreen />;
  }
}
