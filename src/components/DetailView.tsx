"use client";
import { ArrowLeft, TitleBox, BoxLayout } from "commons";
import React from "react";
import { DetailCard } from "./index";
export function DetailView() {
  return (
    <BoxLayout>
      <TitleBox
        variant="primary"
        icon={<ArrowLeft />}
        date="03/01/23"
        className="w-full  "
      >
        Detalles
      </TitleBox>

      <section className="flex flex-col gap-2 p-2">
        <DetailCard type="carrier" />
        <hr />
        <DetailCard type="package" />
      </section>
    </BoxLayout>
  );
}
