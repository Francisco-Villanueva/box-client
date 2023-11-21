import { ReactNode } from "react";
import { BoxIcon, CameraIcon } from "./Icons";

const Icons = ["package", "userPic"] as const;

interface IconBoxProps {
  body?: ReactNode;
  variant?: (typeof Icons)[number];
  icon?: JSX.Element;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
}

export function IconBox({
  variant = "package",
  children,
  className,
}: IconBoxProps) {
  const ICON_COMPONENTS = {
    package: <BoxIcon className="m-1" />,
    userPic: <CameraIcon className="m-8" />,
  };

  const selectedIcon = ICON_COMPONENTS[variant];

  const ICONBOX_STYLE = {
    variant: {
      package: "bg-purple rounded-2xl w-11 h-11 text-darkGreen",
      userPic: "bg-lightGrey rounded-3xl w-24 h-24 text-darkGreen",
    },
  };

  return (
    <button
      className={`flex items-center justify-center font-bold ${
        ICONBOX_STYLE.variant[variant]
      } ${className || ""}`}>
      {selectedIcon}
      {children}
    </button>
  );
}
