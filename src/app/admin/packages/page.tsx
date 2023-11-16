"use client";

import {
  ArrowLeft,
  BoxLayout,
  BoxTitle,
  ShortArrowIcon,
  Title,
  TitleBox,
} from "commons";
import { ShipmentCard } from "components";

import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";

export default observer(function adminPackagesPage() {
  const {
    packages: { deliveredPackages },
  } = useStore();

  return (
    <>
      <TitleBox className="w-full mb-4" icon={<ArrowLeft />}>
        Paquetes
      </TitleBox>

{/* TODO fixear el BoxTitle top y bottom, solo deberia scrollear el mapeo */}

      <BoxLayout className="h-[85%] overflow-scroll">
        <BoxTitle
          variant="topDate"
          className="justify-between p-6 items-center"
        >
          <Title>ENERO</Title>
          <Title>Fecha</Title>
        </BoxTitle>

        <div className="font-roboto text-xs font-medium p-2 bg-white">
          58 paquetes entregados{" "}
        </div>

        {deliveredPackages.map((packages) => (
          <>
            <ShipmentCard pack={packages}></ShipmentCard>
          </>
        ))}

        <BoxTitle variant="bottom">
          <ShortArrowIcon className="rotate-[270deg]" />
        </BoxTitle>
      </BoxLayout>
    </>
  );
});
