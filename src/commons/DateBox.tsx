import { MouseEvent } from "react";

type Variant = keyof typeof DATE_STYLE.variant;

interface DateProps {
  day?: string;
  date?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  variant: Variant;
}

const DATE_STYLE = {
  variant: {
    selected: "bg-yellow  ",
    notSelected: "bg-white  ",
  },
};

export function DateBox({
  variant = "selected",
  date,
  day,
  disabled = false,
  onClick,
}: DateProps) {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-300 flex flex-col items-center  justify-center  text-darkGreen rounded-md h-12 w-12 ${DATE_STYLE.variant[variant]}`}>
      <div
        className={`font-roboto text-sm font-normal ${
          disabled ? "opacity-50" : null
        } `}>
        {day}
      </div>
      <div
        className={`font-roboto text-xl font-bold ${
          disabled ? "opacity-50" : null
        } `}>
        {date}
      </div>
    </div>
  );
}
