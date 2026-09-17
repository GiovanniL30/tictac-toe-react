import type { InputHTMLAttributes } from "react";

export function TextInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={className} {...props} />;
}
