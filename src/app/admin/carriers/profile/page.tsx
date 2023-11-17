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
import { ShipmentCard, ShipmentView } from "components";
import useModal from "hooks/useModal";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";
import Image from "next/image";
import React, { useEffect } from "react";

export default observer(function page() {
  const {
    users: { selectedCarrier, setUserId },
  } = useStore();
  

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
            <CarrierStatus status={selectedCarrier?.status} />
          </div>
        </section>
        <Switch
          onChange={() => {
            console.log("SWITCH STATE OF CARRIER");
          }}
        />
      </BoxLayout>
      <ShipmentView variant="pending" shipmentTitle="pedidos pendientes" />
      <ShipmentView variant="history" shipmentTitle="historial de pedidos" />
    </div>
  );
});
