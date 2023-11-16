import { TitleBox, BoxLayout, ShortArrowIcon } from "commons";
import { ShipmentCard } from "components";
import { user } from "../mocks/users.json";

interface ShipmentProps {
  variant?: "pending" | "history";
}

export function ShipmentView({ variant }: ShipmentProps) {
  const shipmentTitle =
    variant === "pending" ? "repartos pendientes" : "historial de pedidos";
  const activeUser = user[2];

  return (
    <BoxLayout className="mx-auto flex flex-col bg-white ">
      <TitleBox
        icon={<ShortArrowIcon className="rotate-90" />}
        variant="secondary"
        className="w-full mb-4 "
      >
        {shipmentTitle}
      </TitleBox>
      <div className="flex flex-col w-[90%] m-auto overflow-scroll">
        {activeUser.packages.map((carrier, i) => (
          <>
            {i !== 0 && i !== activeUser.packages.length && <hr />}
            <ShipmentCard key={carrier._id} pack={carrier} />
          </>
        ))}
      </div>
    </BoxLayout>
  );
}
