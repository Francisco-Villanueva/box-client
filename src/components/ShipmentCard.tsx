import { Button, IconBox } from "commons";
import { TrashIcon } from "commons/Icons";
import Status from "commons/Status";

interface ShipmentCardProps {
  pack: Pack;
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
  const splitAddress = pack.address.split(",");

  return (
    <div className="font-roboto bg-white text-darkGreen w-full p-2 flex items-center">
      <div>{<IconBox />}</div>
      <div className="font-roboto text-xs pl-2">
        <div className="font-semibold">{pack._id}</div>
        <div className="font-normal">{splitAddress[0]}</div>
        <div>{splitAddress[1]}</div>
      </div>
      <div className="ml-auto flex flex-col items-end gap-2 justify-between">
        <div>{<Status status={`${pack.status}`}></Status>}</div>

        <Button variant="secondary" className="rounded-md p-0">
          {pack.status === "EN CURSO" ? (
            <TrashIcon className="w-[1rem]" />
          ) : (
            <span className="text-[10px]">INICIAR</span>
          )}
        </Button>
      </div>
    </div>
  );
}
