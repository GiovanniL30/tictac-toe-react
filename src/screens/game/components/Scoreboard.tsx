import type { Player } from "../../../types/game";

interface ScoreboardProps {
  players: Player[];
}

export function Scoreboard({ players }: ScoreboardProps) {
  return (
    <div aria-label="Scoreboard">
      {players.map((player) => (
        <span key={player.playerName}>
          {player.playerName}: {player.score}
        </span>
      ))}
    </div>
  );
}
