"use client";
import { useState } from "react";
import { ChcekIcon } from "./Icons";

export function Checkbox() {
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
      {check ? <ChcekIcon className="w-2/3" /> : null}
    </div>
  );
}
