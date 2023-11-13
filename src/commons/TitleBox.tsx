import { ReactNode } from "react";


interface TitleProps {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  className?: string;
}

export function TitleBox({ children, variant = "primary", icon }: TitleProps) {
  const TITLE_STYLE = {
    variant: {
      primary:
        "font-bold font-saira text-lg rounded-2xl p-2 pl-6 bg-yellow text-darkGreen w-80 uppercase flex justify-between items-center",
      secondary:
        "font-bold font-saira text-sm rounded-2xl p-2 pl-6 bg-yellow text-darkGreen w-80 uppercase leading-6 flex justify-between items-center",
    },
  };
  return (
    <div className={`${TITLE_STYLE.variant[variant]}`}>
      <div>{children}</div>
      <div className="w-5 ">{icon}</div>
    </div>
  );
}
