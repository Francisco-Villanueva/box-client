import { ReactNode } from "react";

interface DateProps {
  children?: ReactNode;
 
}

export function DateBox({ children }: DateProps) {
  const SELECTED_DATE = "bg-yellow text-darkGreen w-12 h-12 rounded-md";
  const UNSELECTED_DATE = "bg-white text-darkGreen w-12 h-12 rounded-md";
  
  

  return (
    <>
      <div className={`${SELECTED_DATE}`}>{children}</div> ;
      <div className={`${UNSELECTED_DATE}`}>{children}</div>;
    </>
  );
}
