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
    <div className="h-[95%] flex flex-col gap-4 justify-between">
      <TitleBox className="w-full" icon={<ArrowLeft />}>
        Paquetes
      </TitleBox>

      <BoxLayout className="h-[90%]">
        <BoxTitle
          variant="topDate"
          className="justify-between h-[10%] p-6 items-center"
        >
          <Title>ENERO</Title>
          <Title>Fecha</Title>
        </BoxTitle>

        <div className="font-roboto text-xs font-medium p-2 bg-white">
          58 paquetes entregados{" "}
        </div>

        <div className="overflow-scroll max-h-[90%] flex flex-col m-auto">
          {deliveredPackages.map((packages) => (
            <ShipmentCard pack={packages}></ShipmentCard>
          ))}
        </div>

        <BoxTitle variant="bottom" className="h-[10%]">
          <ShortArrowIcon className="rotate-[270deg]" />
        </BoxTitle>
      </BoxLayout>
    </div>
  );
});
