import { TitleBox, BoxLayout, ShortArrowIcon } from "commons";

import { CarrierCard } from "components";
import { user } from "../mocks/users.json";

export function ShipmentView() {
  // TODO modificar el CarrierCard por el nuevo componente de Shipment Card

  return (
    <div>
      <BoxLayout className="mx-auto w-[300px] bg-white ">
        <TitleBox
          icon={<ShortArrowIcon className="rotate-90"/>}
          variant="secondary"
          className="max-w-full mb-4 "
        >
          Repartos Pendientes
        </TitleBox>
        <div className="flex flex-col w-[90%] m-auto">
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
