import type { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div aria-label={title} aria-modal="true" role="dialog">
      <header>
        <h2>{title}</h2>
        <button aria-label="Close" onClick={onClose} type="button">
          ×
        </button>
      </header>
      {children}
    </div>
  );
}
