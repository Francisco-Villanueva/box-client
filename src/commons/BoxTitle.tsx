import { ReactNode } from "react";

interface BoxTitleProps {
  className?: string;
  children?: ReactNode;
  variant?: Style;
}

type Style = keyof typeof BOX_TITLE_STYLE.variant;

const BOX_TITLE_STYLE = {
  variant: {
    top: "flex flex-col bg-purple justify-center h-[50px] rounded-t-2xl",
    topDate: "flex bg-purple justify-center h-[50px] rounded-t-2xl",
    bottom: "flex  bg-white justify-center h-[50px] rounded-b-2xl",
  },
};

export function BoxTitle({
  className,
  children,
  variant = "top",
}: BoxTitleProps) {
  return (
    <div className={`${BOX_TITLE_STYLE.variant[variant]} ${className}`}>
      {children}
    </div>
  );
}