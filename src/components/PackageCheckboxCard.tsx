import { Checkbox, StatusString } from "commons";


interface PackageCheckboxCardProps {
  pack: Pack;
}

interface Pack {
  _id: string;
  address: string;
  clientName: string;
  weight: number;
  deliverDate: string;
  status: StatusString;
}

export function PackageCheckboxCard({ pack }: PackageCheckboxCardProps) {

  const splitAddress = pack.address.split(",")
  const shortAddress = `${splitAddress[0]}, ${splitAddress[1]}`

  return (
    <div className="font-roboto bg-white text-darkGreen w-full p-5 flex items-center border">
      <div>{<Checkbox />}</div>
      <div className="font-roboto text-xs pl-2">
        <div>{shortAddress}</div>
      </div>
    </div>
  );
}
