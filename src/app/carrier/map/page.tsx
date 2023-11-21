"use client";
import { DeliveryInProgress } from "components/DeliveryInProgress";
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";

export default observer(function page() {
  const {
    packages: { currentPackage },
  } = useStore();

  const address = currentPackage?.address;
  const receiver = currentPackage?.clientName;
  const packNumber = currentPackage?._id.slice(0, 5);

  return (
    <DeliveryInProgress
      address={address}
      receiver={receiver}
      packNumber={packNumber}></DeliveryInProgress>
  );
});
