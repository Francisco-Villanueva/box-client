import { ReactNode } from "react";

interface ButtonProps {
  body?: ReactNode;
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
}
export function Button({
  children,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const BUTTON_STYLE = {
    variant: {
      primary: "bg-darkGreen text-yellow order border-darkGreen   ",
      secondary: "bg-none text-darkGreen  border border-darkGreen  ",
    },
    disabled: {
      primary: "bg-light-grey    text-grey ",
      delete: "bg-light-grey    text-grey ",

      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };
  return (
    <button
      disabled={disabled}
      className={`font-semibold rounded-2xl p-2 ${
        disabled
          ? `${BUTTON_STYLE.disabled[variant]} `
          : `${BUTTON_STYLE.variant[variant]} `
      }`}
    >
      {children}
    </button>
  );
}