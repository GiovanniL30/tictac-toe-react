interface ToastProps {
  message: string;
}

export function Toast({ message }: ToastProps) {
  return (
    <div aria-live="polite" role="status">
      {message}
    </div>
  );
}
