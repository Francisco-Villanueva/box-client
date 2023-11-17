"use client";
import React from "react";
import { Button, TitleBox, GoogleMap, MapDescription } from "commons";
import { ArrowLeft } from "commons/Icons";
import Link from "next/link";
import { message } from "antd";

interface DeliveryProps {
  address: any;
  receiver: any;
  packNumber: any;
}

export function DeliveryInProgress({
  address,
  receiver,
  packNumber,
}: DeliveryProps) {
  return (
    <>
      <TitleBox
        variant="primary"
        icon={
          <Link href={"/carrier"}>
            <ArrowLeft />
          </Link>
        }
        className="w-full my-2 pr-6"
      >
        reparto en curso
      </TitleBox>

      <div className="w-full h-[45vh] rounded-2xl overflow-hidden my-2">
        <GoogleMap
          origin="Av Santa Fe 2545, CABA" //Esta dirección deberia salir de la geolocalización
          destination={address}
        ></GoogleMap>
      </div>
      <MapDescription
        destiny={address}
        packageNumber={packNumber}
        receiver={receiver}
      ></MapDescription>
      <div className="flex flex-col items-center justify-center">
        <Link href={"/carrier"} className="w-5/6 mt-4">
          <Button
            className="w-full"
            variant="primary"
            onClick={() => message.success("Entrega completada")}
          >
            FINALIZAR
          </Button>
        </Link>
        <Link href={"/carrier"} className="w-5/6 mt-4">
          <Button
            className="w-full"
            variant="secondary"
            onClick={() => message.success("Entrega cancelada")}
          >
            CANCELAR ENTREGA
          </Button>
        </Link>
      </div>
    </>
  );
}
