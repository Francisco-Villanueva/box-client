"use client";
import {
  ArrowLeft,
  BodyLayout,
  BoxLayout,
  CarrierStatus,
  ShortArrowIcon,
  Switch,
  Title,
  TitleBox,
} from "commons";
import { ShipmentCard } from "components";
import useModal from "hooks/useModal";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";
import Image from "next/image";
import React, { useEffect } from "react";

export default observer(function page() {
  const {
    users: {
      selectedCarrier,
      setUserId,
      pendingPackagesByCarrier,
      delviredPackagesByCarrier,
    },
  } = useStore();
  useEffect(() => {
    setUserId("3");
  }, [selectedCarrier]);

  const MODAL_PENDING = useModal();
  const MODAL_HISTORY = useModal();
  return (
    <div className="h-[90%]  flex flex-col gap-2">
      <TitleBox icon={<ArrowLeft className="w-4" />}>
        Gestionar pedidos
      </TitleBox>
      <BoxLayout className="bg-white p-4 flex items-center justify-between">
        <section className="flex items-center gap-4">
          <Image
            src="/users/user1.jpeg"
            alt="a"
            width={90}
            height={1}
            className="rounded-2xl"
          />
          <div>
            <h2 className="font-bold"> {selectedCarrier?.name} </h2>
            <CarrierStatus status="HABILITADO" />
          </div>
        </section>
        <Switch onChange={() => {}} />
      </BoxLayout>

      <BoxLayout className="bg-white ">
        <TitleBox
          className={`${MODAL_PENDING.isModalOpen && "rounded-b-none"}`}
          subtitle={pendingPackagesByCarrier?.length ? "" : "Sin repartos"}
          onClick={() =>
            MODAL_PENDING.isModalOpen
              ? MODAL_PENDING.closeModal()
              : MODAL_PENDING.openModal()
          }
          icon={
            <ShortArrowIcon
              className={`w-4 transition-all duration-150 ${
                MODAL_PENDING.isModalOpen ? "rotate-[270deg]" : "rotate-180"
              }`}
            />
          }
        >
          repartos pendientes
        </TitleBox>
        {pendingPackagesByCarrier?.length && MODAL_PENDING.isModalOpen ? (
          <section className="p-2">
            {pendingPackagesByCarrier?.map((pack) => (
              <ShipmentCard pack={pack} />
            ))}
          </section>
        ) : null}
      </BoxLayout>

      <BoxLayout className="bg-white ">
        <TitleBox
          className={`${MODAL_HISTORY.isModalOpen && "rounded-b-none"}`}
          onClick={() =>
            MODAL_HISTORY.isModalOpen
              ? MODAL_HISTORY.closeModal()
              : MODAL_HISTORY.openModal()
          }
          icon={
            <ShortArrowIcon
              className={`w-4 transition-all duration-150 ${
                MODAL_HISTORY.isModalOpen ? "rotate-[270deg]" : "rotate-180"
              }`}
            />
          }
        >
          HISTORIAL DE PEDIDOS
        </TitleBox>
        {MODAL_HISTORY.isModalOpen ? (
          <section className="p-2">
            {delviredPackagesByCarrier?.map((pack) => (
              <ShipmentCard pack={pack} />
            ))}
          </section>
        ) : null}
      </BoxLayout>
    </div>
  );
});
