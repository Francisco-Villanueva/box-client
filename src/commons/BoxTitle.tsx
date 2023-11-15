import { ReactNode } from "react";

interface BoxTitleProps {
  className?: string;
  children?: ReactNode;
}

export function BoxTitle({ 
  className,
  children,
 }:BoxTitleProps) {
  
  return (
  
  <div className={` flex flex-col bg-purple justify-center h-[50px] rounded-t-2xl ${className}`}>
    {children}
  </div>
  
  );
}
