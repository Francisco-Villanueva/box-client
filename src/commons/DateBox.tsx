import { ReactNode } from "react";

interface DateProps {
  children?: ReactNode;
  day?: string;
  date?: number;
  disabled?: boolean;
  variant: "selected" | "notSelected";
}

export function DateBox({
  children,
  variant,
  date,
  day,
  disabled = false,
}: DateProps) {
  const DATE_STYLE = {
    variant: {
      selected:
        "bg-yellow text-darkGreen w-10 h-10 rounded-md flex flex-col items-center justify-centerl ",
      notSelected:
        "bg-white text-darkGreen w-10 h-10 rounded-md flex flex-col items-center justify-center",
    },
  };

  return (
    <div className={`${DATE_STYLE.variant[variant]}`}>
      <div
        className={`font-roboto text-xs font-normal ${
          disabled ? "opacity-50" : null
        } `}
      >
        {day}
      </div>
      <div
        className={`font-roboto text-base font-bold ${
          disabled ? "opacity-50" : null
        } `}
      >
        {date}
      </div>
    </div>
  );
}
