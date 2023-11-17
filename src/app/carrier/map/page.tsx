import { DeliveryInProgress } from "components/DeliveryInProgress";
import React from "react";
import items from "../../../mocks/items.json";

// TODO: Las props deben salir de la data real de los paquetes y no del json

export default function page() {
  const Package = items.packages[2];
  const address = Package.address;
  const receiver = Package.clientName;
  const packNumber = Package._id.slice(0, 5);

  return (
    <DeliveryInProgress
      address={address}
      receiver={receiver}
      packNumber={packNumber}
    ></DeliveryInProgress>
  );
}
