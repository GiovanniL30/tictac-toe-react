import CreateRoomScreen from "./features/create-room/CreateRoomScreen";
import GameScreen from "./features/game/GameScreen";
import HistoryScreen from "./features/history/HistoryScreen";
import HomeScreen from "./features/home/HomeScreen";
import JoinRoomScreen from "./features/join-room/JoinRoomScreen";
import WaitingRoomScreen from "./features/waiting-room/WaitingRoomScreen";
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
