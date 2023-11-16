"use client";
import { ArrowLeft, TitleBox, BoxLayout } from "commons";
import React from "react";
import { DetailCard } from "./index";
import { useStore } from "models/root.store";
import { observer } from "mobx-react-lite";
export const DetailView = observer(function () {
  const {
    date: { date_DMY },
  } = useStore();
  //TODO Esta vista tiene que mostrar los detalles segun la fecha.

  return (
    <BoxLayout className=" bg-white   ">
      <TitleBox
        variant="primary"
        icon={<ArrowLeft />}
        date={date_DMY}
        className="w-full rounded-b-none "
      >
        Detalles
      </TitleBox>
      <section className="flex flex-col justify-around   gap-2 p-2">
        <DetailCard type="carrier" />
        <hr />
        <DetailCard type="package" />
      </section>
    </BoxLayout>
  );
});
