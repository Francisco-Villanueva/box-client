"use client";
import { Button } from "commons";
import { ShipmentView } from "components";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <div className="w-full h-[45vh] rounded-2xl overflow-hidden my-2"></div> */}

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-[30vh] overflow-hidden">
          <ShipmentView variant="pending"></ShipmentView>
        </div>

        <div className="h-[45vh] overflow-hidden">
          <ShipmentView variant="history"></ShipmentView>
        </div>
        <Button className="w-5/6 mt-4 m-6" variant="primary">
          OBTENER PAQUETES
        </Button>
      </div>
    </div>
  );
}
