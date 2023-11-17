import useModal from "hooks/useModal";
import { TitleBox, BoxLayout, ShortArrowIcon } from "commons";
import { ShipmentCard } from "components";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";

interface ShipmentProps {
  variant?: "pending" | "history";
  shipmentTitle: string;
}

export const ShipmentView = observer(function ({
  variant,
  shipmentTitle,
}: ShipmentProps) {
  const {
    users: { pendingPackagesByCarrier, delviredPackagesByCarrier },
  } = useStore();

  const packs =
    variant === "pending"
      ? pendingPackagesByCarrier
      : delviredPackagesByCarrier;

  const { isModalOpen, toggleModal } = useModal();

  return (
    <BoxLayout className=" bg-white ">
      <TitleBox
        className={`${isModalOpen && "rounded-b-none"}`}
        subtitle={packs?.length ? "" : "Sin repartos"}
        onClick={toggleModal}
        icon={
          <ShortArrowIcon
            className={`w-4 transition-all duration-150 ${
              isModalOpen ? "rotate-[270deg]" : "rotate-180"
            }`}
          />
        }
      >
        {shipmentTitle}
      </TitleBox>

      {isModalOpen ? (
        <section className="p-2">
          <div>
            <div className="font-roboto text-xs font-medium p-2">
              {packs?.length} paquetes entregados{" "}
            </div>
            <hr></hr>
          </div>
          {packs?.map((pack) => (
            <ShipmentCard pack={pack} />
          ))}
        </section>
      ) : null}
    </BoxLayout>
  );
});
