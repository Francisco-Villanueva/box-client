import React from "react";

interface InputCalendarProps {
  title: string;
}

export function InputCalendar({ title }: InputCalendarProps) {
  return (
    <div className="flex flex-col ">
      <span className="text-darkGreen ">{title}</span>
      <input
        type="date"
        className="w-full py-2 pl-8 pr-3 border uppercase border-darkGreen rounded-lg focus:outline-none placeholder-darkGreen bg-transparent"
      />
    </div>
  );
}
