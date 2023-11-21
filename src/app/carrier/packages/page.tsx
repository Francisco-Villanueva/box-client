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
import Link from "next/link";
import { useState } from "react";

export default observer(function packagesPage() {
  const [trimmer, setTrimmer] = useState(7);
  const {
    packages: { unassignedPackages },
  } = useStore();

  const handleTrimmer = () => {
    if (trimmer === unassignedPackages.length) {
      setTrimmer(7);
    } else {
      setTrimmer(unassignedPackages.length);
    }
  };

  return (
    <div className="h-[95%] flex flex-col gap-4 justify-between">
      <TitleBox
        className="w-full"
        icon={
          <Link href={"/carrier"}>
            <ArrowLeft />
          </Link>
        }>
        Obtener Paquetes
      </TitleBox>

      <BoxLayout className="bg-white h-[95%] ">
        <BoxTitle className="h-[10%]">
          <Title>¿Cuántos paquetes repartirás hoy?</Title>
        </BoxTitle>

        {/* //TODO Aplicar Trimmer */}

        <div className="overflow-scroll max-h-[80%] flex flex-col m-auto ">
          {unassignedPackages.slice(0, trimmer).map((packages) => (
            <PackageCheckboxCard pack={packages}></PackageCheckboxCard>
          ))}
        </div>

        {/* <BoxTitle variant="bottom" className="h-[10%] border-t">
          <ShortArrowIcon className="rotate-[270deg]" />
        </BoxTitle> */}
        <BoxTitle variant="bottom" className="h-[10%]">
          <Button
            className="border-none"
            variant="secondary"
            onClick={handleTrimmer}>
            <ShortArrowIcon
              className={`transition-all duration-300 ${
                trimmer === unassignedPackages.length
                  ? " rotate-[90deg]"
                  : " rotate-[270deg]"
              } w-6`}
            />
          </Button>
        </BoxTitle>
      </BoxLayout>

      <Link href={"/carrier"} className="w-full flex justify-center">
        <Button className="w-[90%] uppercase flex m-auto justify-center ">
          Iniciar Jornada
        </Button>
      </Link>
    </div>
  );
});
