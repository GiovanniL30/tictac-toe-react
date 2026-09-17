import { Button } from "../ui/Button";

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return <Button onClick={onClick}>Back</Button>;
}
