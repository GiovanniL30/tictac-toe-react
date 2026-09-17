import type { BoardCell } from "../../../types/game";

interface BoardProps {
  cells: BoardCell[];
  disabled?: boolean;
  onCellSelect: (index: number) => void;
}

export function Board({ cells, disabled = false, onCellSelect }: BoardProps) {
  return (
    <div aria-label="Tic-tac-toe board" className="grid grid-cols-3">
      {cells.map((cell, index) => (
        <button
          aria-label={`Cell ${index + 1}`}
          disabled={disabled || cell !== null}
          key={index}
          onClick={() => onCellSelect(index)}
          type="button"
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
