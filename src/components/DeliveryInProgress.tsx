"use client";
import React from "react";
import { Button, TitleBox, GoogleMap, MapDescription } from "commons";
import { ArrowLeft } from "commons/Icons";

// TODO: Las props de GoogleMap y de MapDescription deben salir de la data real de los paquetes

export function DeliveryInProgress() {
  return (
    <>
      <TitleBox
        variant="primary"
        icon={<ArrowLeft />}
        className="w-full my-2 pr-6"
      >
        reparto en curso
      </TitleBox>
      <div className="w-full h-[45vh] rounded-2xl overflow-hidden my-2">
        <GoogleMap
          origin="Av Santa Fe 2545, CABA"
          destination="Av Libertador 6954, CABA"
        ></GoogleMap>
      </div>
      <MapDescription
        destiny="Av Libertador 6954, CABA"
        packageNumber="12345"
        receiver="Dario"
      ></MapDescription>
      <div className="flex flex-col items-center justify-center">
        <Button className="w-5/6 mt-4" variant="primary">
          FINALIZAR
        </Button>
        <Button className="w-5/6 mt-2" variant="secondary">
          CANCELAR ENTREGA
        </Button>
      </div>
    </>
  );
}
