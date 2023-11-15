import { Button, IconBox } from "commons";
import { TrashIcon } from "commons/Icons";
import Status from "commons/Status";
import { ReactNode } from "react";

interface ShipmentCardProps {
  pack: Pack;
}

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  role: string;
  packages: Pack[];
}
interface Pack {
  _id: string;
  address: string;
  clientName: string;
  weight: number;
  deliverDate: string;
  status: string;
}

export function ShipmentCard({ pack }: ShipmentCardProps) {
  return (
    <div className="font-roboto bg-white text-darkGreen w-80 border-black border-2 p-2 flex">
      <div>{<IconBox />}</div>
      <div className="font-roboto text-xs pl-2">
        <div className="font-semibold">{pack._id}</div>
        <div className="font-normal">{pack.address}</div>
        <div>CABA</div>
      </div>
      <div className="ml-auto">
        <div>{<Status status={`${pack.status}`}></Status>}</div>

        {pack.status === "EN CURSO" ? (
          <div>
            <Button
              variant="secondary"
              className=""
            > <TrashIcon className="w-3"/> </Button>
          </div>
        ) : pack.status === "PENDIENTE" ? (
          <div className="text-xs ">
            <Button
              variant="secondary"
              children={"INICIAR"}
              className=""
            ></Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
