"use client";
import { TitleBox } from "commons";
import React, { useState } from "react";
import { ArrowLeft } from "commons/Icons";
import { Button, BoxLayout, InputCalendar } from "commons";
import Link from "next/link";
import { message } from "antd";
import { FormInput } from "components";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const [state, setState] = useState({});
  
  const handleInput = (key: string, value: string) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCreatePackage = () => {
    router.push("/admin");
    message.success("Paquete creado");
  };


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
        <FormInput
          placeholder="Dirección"
          type="text"
          reference="adress"
          handleInput={handleInput}
        />
        <FormInput
          type="text"
          reference="adress"
          handleInput={handleInput}
          placeholder="Nombre de quien recibe"
        />
        <FormInput
          type="text"
          reference="adress"
          handleInput={handleInput}
          placeholder="Peso del paquete (Kg)"
        />
        <div className="pt-12 pb-28">
          <InputCalendar title="Seleccione una fecha" />
        </div>
      </BoxLayout>
      <div className="flex justify-center">
        <Button
          children={"AGREGAR"}
          className="w-11/12 mt-5"
          onClick={handleCreatePackage}
        />
      </div>
    </div>
  );
}
