import React from "react";
import { CircleIcon } from "./Icons";

interface StatusProps {
  status: StatusString;
}

// If you need add new color, modified this line ex; red: "red" || blue: "blue"
const Colors = {
  green: "green",
  grey: "grey",
} as const;

type Color = keyof typeof Colors;

//If you need add status, modified this line
export type StatusString = "EN CURSO" | "PENDIENTE" | "FINALIZADO";

const STATUSCOLOR: Record<StatusString, Color> = {
  "EN CURSO": "green",
  PENDIENTE: "grey",
  FINALIZADO: "grey",
} as const;

export function Status({ status }: StatusProps) {
  const color = STATUSCOLOR[status];

  return (
    <>
      <div className="bg-lightGrey py-[.5] px-2 flex items-center rounded-md gap-2">
        <div>
          <CircleIcon fill={`${Colors[color]}`} />
        </div>
        <p className="text-center text-darkGreen font-roboto font-[500] text-xs uppercase">
          {status}
        </p>
      </div>
    </>
  );
}
