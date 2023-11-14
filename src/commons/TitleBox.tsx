"use client";
import { ReactNode, useState } from "react";

interface TitleProps {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  icon?: JSX.Element;
  className?: string;
  subtitle?: string;
  date?: string;
}

export function TitleBox({
  children,
  variant = "primary",
  icon,
  subtitle,
  date,
}: TitleProps) {
  const [isActive, setIsActive] = useState(true);

  const TITLE_STYLE = {
    variant: {
      primary:
        "font-bold font-saira text-lg rounded-2xl p-2 pl-6 bg-yellow text-darkGreen w-80 uppercase items-center",
      secondary:
        "font-bold font-saira text-sm rounded-2xl p-2 pl-6 bg-yellow text-darkGreen w-80 uppercase leading-6  items-center",
    },
  };
  return (
    <>
      <div className={`${TITLE_STYLE.variant[variant]}`}>
        <div className="flex justify-between">
          <div>
            <div>{children}</div>{" "}
            <div className="text-xs lowercase">{subtitle}</div>
          </div>
          <div className="font-medium">{date}</div>
          {variant === "secondary" ? (
            <button
              onClick={() => setIsActive(!isActive)}
              className={`w-5 ${isActive ? "rotate-90" : "rotate-180"}`}
            >
              {icon}
            </button>
          ) : (
            <button className={`w-5`}>{icon}</button>
          )}
        </div>
      </div>
    </>
  );
}
