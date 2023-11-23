import { type } from "os";
import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  body?: ReactNode;
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className: additionalClassName = "",
}: ButtonProps) {
  const BUTTON_STYLE = {
    variant: {
      primary: "bg-darkGreen text-yellow border-darkGreen font-roboto",
      secondary: "bg-none text-darkGreen border border-darkGreen",
    },
    disabled: {
      primary:
        "bg-darkGreen opacity-40  text-yellow border-darkGreen font-roboto",
    },
  };

  const buttonClassName = `rounded-lg px-2 py-1 ${
    disabled
      ? `${BUTTON_STYLE.disabled.primary} `
      : `${BUTTON_STYLE.variant[variant]} `
  } ${additionalClassName}`;

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClassName}>
      {children}
    </button>
  );
}
