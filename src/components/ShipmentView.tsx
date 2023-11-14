import { TitleBox, BoxLayout } from "commons";
import { ShortArrowIcon } from "commons/Icons";

import CarrierCard from "components/CarrierCard";
import { user } from "../mocks/users.json";

export default function ShipmentView() {

// TODO modificar el CarrierCard por el nuevo componente de Shipment Card

  return (
    <div>
      <BoxLayout className="mx-auto w-[300px] bg-white pr-2 pl-2">
        <TitleBox icon={<ShortArrowIcon />} variant="secondary" className="max-w-full mb-4 ">
          Repartos Pendientes
        </TitleBox>
        <div className="flex flex-col ">
          {user.slice(1).map((carrier, i) => (
            <CarrierCard key={i} carrier={carrier} />
          ))}
        </div>
      </BoxLayout>
    </div>
  );
}

/*
    <div className="flex flex-col w-[300px] h-[188px] border-black border bg-white rounded-2xl">
      <TitleBox icon={icono} className="max-w-full" variant="secondary">Repartos Pendientes</TitleBox>
    </div>
*/
