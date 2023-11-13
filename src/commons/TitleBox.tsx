import { ReactNode } from "react";

interface TitleProps {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  className?: string;
}

export function TitleBox({ children, variant = "primary" }: TitleProps) {
  const TITLE_STYLE = {
    variant: {
      primary: "font-bold font-saira text-lg rounded-2xl p-2 pl-8 bg-yellow text-darkGreen w-80",
      // primary: "bg-darkGreen text-yellow order border-darkGreen   ",

      secondary: "bg-darkGreen text-yellow order border-darkGreen  ",
    },
  };
  return <div className={`${TITLE_STYLE.variant[variant]}`}>{children}</div>;
}
