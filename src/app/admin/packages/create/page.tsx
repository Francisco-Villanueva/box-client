"use client";
import { TitleBox } from "commons";
import React from "react";
import { ArrowLeft } from "commons/Icons";
import { Input, Button, BoxLayout, InputCalendar } from "commons";
import Link from "next/link";
import { message } from "antd";
export default function page() {
  return (
    <div>
      <TitleBox
        children="AGREGAR PAQUETES"
        icon={
          <Link href={"/admin"}>
            <ArrowLeft />
          </Link>
        }
        className="mb-3 w-full"></TitleBox>
      <BoxLayout className="bg-white h-full px-8 pt-8">
        <Input placeholder="Dirección" />
        <Input placeholder="Nombre de quien recibe" />
        <Input placeholder="Peso del paquete (Kg)" />
        <div className="pt-12 pb-28">
          <InputCalendar title="Seleccione una fecha" />
        </div>
      </BoxLayout>
      <div className="flex justify-center">
        <Button
          children={"AGREGAR"}
          className="w-11/12 mt-5"
          onClick={() => message.success("Paquete creado")}
        />
      </div>
    </div>
  );
}
