"use client";
import { UserImg, Title, Graph, Status } from "commons";
import { User } from "types";

interface CarrierCardProps {
  carrier: User;
}

export function CarrierCard({ carrier }: CarrierCardProps) {
  console.log("carrier--->", carrier);

  const packagesDelivered = carrier.packages.filter(
    (pack) => pack.status === "ENTREGADO"
  );

  const percentage = Math.floor(
    (packagesDelivered.length / carrier.packages.length) * 100
  );

  const status = carrier.packages.some((pack) => pack.status === "EN CURSO")
    ? "EN CURSO"
    : percentage === 100
    ? "ENTREGADO"
    : "PENDIENTE";

  return (
    <div
      className="flex items-center justify-between p-4 border-t border-black bg-white"
      key={carrier._id}
    >
      <div className="flex items-center gap-4">
        <Graph value={percentage} size="md" />
        <div className="flex flex-col">
          <div className="font-medium text-start text-darkGreen text-md">{carrier.name}</div>
          <Status status={status} />
        </div>
      </div>

      <div className="relative">
        <UserImg src="/users/user1.jpeg" alt="s" className="w-14 h-14" />
      </div>
    </div>
  );
}
