import React from "react";
interface StatusProps {
  status: string;
}
export function CarrierStatus({ status }: StatusProps) {
  return (
    <>
      <div
        className={`${
          status === "HABILITADO" ? "bg-lightGreen" : "bg-lightGrey"
        } py-[.5] px-2 flex items-center rounded-md gap-2`}
      >
        <p className="text-center text-darkGreen font-roboto font-[500] text-xs uppercase">
          {status}
        </p>
      </div>
    </>
  );
}
