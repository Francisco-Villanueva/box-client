import React from "react";
import { CircleIcon } from "./Icons";

interface StatusProps {
  status: string;
}

export default function Status({ status }: StatusProps) {
  const STATUSCOLOR: any = {
    "EN CURSO": "green",
    PENDIENTE: "grey",
    ENTREGADO: "blue",
  };
  return (
    <>
      <div className="bg-lightGrey py-[.5] px-2 flex items-center rounded-md gap-2">
        <div>
          <CircleIcon fill={`${STATUSCOLOR[status]}`} />
        </div>
        <p className="text-center text-darkGreen font-roboto font-[500] text-xs uppercase">
          {status}
        </p>
      </div>
    </>
  );
}
