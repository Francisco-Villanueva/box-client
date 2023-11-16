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
    <BoxLayout className="mx-auto flex flex-col bg-white h-full">
      <TitleBox
        icon={<ShortArrowIcon className="rotate-90" />}
        variant="secondary"
        className="w-full"
      >
        {shipmentTitle}
      </TitleBox>
      <div className="flex flex-col w-[90%] m-auto overflow-scroll">
        {variant === "history" ? (
          <div>
            <div className="font-roboto text-xs font-medium p-2">
              58 paquetes entregados{" "}
            </div>
            <hr></hr>
          </div>
        ) : null}

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
