import React from "react";
import { CircleIcon } from "./Icons";

interface StatusProps {
    statusColor: string;
    statusShipment: string;
}

export default function Status({statusColor, statusShipment} :StatusProps) {
  return (
    <>
      <div className="bg-lightGrey h-4 flex items-center rounded-r-sm  rounded-l-md">
        <div className="ml-2">
        <CircleIcon className="green"/>
        </div>
        <p className="text-center ml-2 text-darkGreen font-roboto font-black uppercase">Entregado</p>
      </div>
    </>
  );
} 
