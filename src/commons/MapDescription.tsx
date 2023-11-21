import React from "react";

interface MapDescriptionProps {
  destiny: string;
  packageNumber: string;
  receiver: string;
}

export function MapDescription({
  destiny,
  packageNumber,
  receiver,
}: MapDescriptionProps) {
  return (
    <div className="bg-purple h-24 rounded-2xl flex items-center w-full">
      <div className="font-roboto ml-3.5">
        <p>
          <strong>Destino: </strong>
          {destiny}
        </p>
        <p>
          <strong>Número de paquete: </strong>
          {packageNumber}
        </p>
        <p>
          <strong>Recibe: </strong>
          {receiver}
        </p>
      </div>
    </div>
  );
}
