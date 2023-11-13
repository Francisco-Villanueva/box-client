"use client";
import { useState } from "react";

interface CheckIconProps {
  className: string;
}
//TODO:  Move this to Icon.tsx commons file
function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function Checkbox() {
  const [check, setCheck] = useState(false);
  const CHECKED_STYLE = "bg-yellow text-darkGreen ";
  const UNCHECKED_STYLE = "bg-none border border-darkGreen border-2";
  return (
    <div
      onClick={() => setCheck(!check)}
      className={` transition-colors duration-200  grid place-items-center w-10 h-10 rounded-full ${
        check ? CHECKED_STYLE : UNCHECKED_STYLE
      }`}
    >
      {check ? <CheckIcon className="w-2/3" /> : null}
    </div>
  );
}
