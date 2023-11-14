import { IconBox } from "commons";
import Status from "commons/Status";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  idPackage?: string;
  addressPackage?: string;
}

export function ShipmentCard({
  children,
  idPackage,
  addressPackage,
}: CardProps) {
  return (
    <div className="font-roboto bg-white text-darkGreen w-80 border-black border-2 p-2 flex flex-row ">
      {<IconBox />}
      <div className="flex flex-col">
        <>{idPackage}</>
        <>{addressPackage}</>
      </div>
      {<Status statusColor="green" statusShipment="Entregado"></Status>}
    </div>
  );
}
