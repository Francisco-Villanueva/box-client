"use client";
import React from "react";
import { Button, TitleBox, GoogleMap, MapDescription } from "commons";
import { ArrowLeft } from "commons/Icons";
import Link from "next/link";

interface DeliveryProps {
  address: string;
  receiver: string;
  packNumber: string;
}

export function DeliveryInProgress({
  address,
  receiver,
  packNumber,
}: DeliveryProps) {
  return (
    <>
      <Link href={"/carrier"}>
        <TitleBox
          variant="primary"
          icon={<ArrowLeft />}
          className="w-full my-2 pr-6"
        >
          reparto en curso
        </TitleBox>
      </Link>
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
          <Button className="w-full" variant="primary">
            FINALIZAR
          </Button>
        </Link>
        <Button className="w-5/6 mt-2" variant="secondary">
          CANCELAR ENTREGA
        </Button>
      </div>
    </>
  );
}
