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
    <>
      <TitleBox className="w-full mb-4" icon={<ArrowLeft />}>
        Obtener Paquetes
      </TitleBox>

      <BoxLayout>
        <BoxTitle>
          <Title>¿Cuántos paquetes repartirás hoy?</Title>
        </BoxTitle>

        {/* TODO ver el error de Type en PackageCheckboxCard */}
        <div className="flex flex-col m-auto">
          {unassignedPackages.map((packages) => (
            <>
              <PackageCheckboxCard pack={packages}></PackageCheckboxCard>
            </>
          ))}
        </div>

        <BoxTitle variant="bottom">
          <ShortArrowIcon className="rotate-[270deg]" />
        </BoxTitle>
      </BoxLayout>

      {/* TODO agregarle margin abajo del boton */}
      <Button className="w-[90%] uppercase flex m-auto justify-center my-4">
        Iniciar Jornada
      </Button>
    </>
  );
});
