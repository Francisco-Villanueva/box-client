"use client";

import {
  ArrowLeft,
  BoxLayout,
  Button,
  TitleBox,
  Title,
  BoxTitle,
  ShortArrowIcon,
} from "commons";
import { PackageCheckboxCard } from "components";

import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";

export default observer(function packagesPage() {
  const {
    packages: { unassignedPackages },
  } = useStore();

  return (
    <div className="h-[90%] flex flex-col gap-4 justify-between">
      <TitleBox className="w-full" icon={<ArrowLeft />}>
        Obtener Paquetes
      </TitleBox>

      <BoxLayout className="bg-white h-[90%] ">
        <BoxTitle className="h-[10%]">
          <Title>¿Cuántos paquetes repartirás hoy?</Title>
        </BoxTitle>

        {/* TODO ver el error de Type en PackageCheckboxCard */}
        <div className="overflow-scroll max-h-[80%] flex flex-col m-auto ">
          {unassignedPackages.map((packages) => (
            <PackageCheckboxCard pack={packages}></PackageCheckboxCard>
          ))}
        </div>

        <BoxTitle variant="bottom" className="h-[10%] border-t">
          <ShortArrowIcon className="rotate-[270deg]" />
        </BoxTitle>
      </BoxLayout>

      {/* TODO agregarle margin abajo del boton */}
      <Button className="w-[90%] uppercase flex m-auto justify-center ">
        Iniciar Jornada
      </Button>
    </div>
  );
});
