"use client";
import { MouseEvent, ReactNode, useState } from "react";

interface TitleProps {
  children?: ReactNode;
  variant?: Style;
  icon?: JSX.Element;
  className?: string;
  subtitle?: string;
  date?: string;
  onClick?: (event: MouseEvent) => void;
}

type Style = keyof typeof TITLE_STYLE.variant;

const TITLE_STYLE = {
  variant: {
    primary:
      "font-bold font-saira text-lg rounded-2xl p-2 pl-6 bg-yellow text-darkGreen  uppercase items-center",
    secondary:
      "font-bold font-saira text-sm rounded-2xl p-2 pl-6 bg-yellow text-darkGreen  uppercase leading-6  items-center",
  },
};

export function TitleBox({
  children,
  variant = "primary",
  icon,
  subtitle,
  date,
  onClick,
  className,
}: TitleProps) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div
      className={`flex justify-between ${TITLE_STYLE.variant[variant]} ${className}`}>
      <div className="flex flex-col  ">
        <h2 className="m-0">{children}</h2>{" "}
        <span className="text-sm lowercase mt-[-5px]">{subtitle}</span>
      </div>
      <div className="font-medium">{date}</div>
      {variant === "secondary" ? (
        <button
          onClick={() => setIsActive(!isActive)}
          className={`w-5 ${isActive ? "rotate-90" : "rotate-180"}`}>
          {icon}
        </button>
      ) : (
        <button className={`w-5`} onClick={onClick}>
          {icon}
        </button>
      )}
    </div>
  );
}
