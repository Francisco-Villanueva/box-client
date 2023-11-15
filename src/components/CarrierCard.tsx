"use client";
import { UserImg } from "commons";
import { Graph } from "commons/Graph";
import Status from "commons/Status";
import Title from "commons/Title";
import { User } from "types";

interface CarrierCardProps {
  carrier: User;
}

export function CarrierCard({ carrier }: CarrierCardProps) {
  const packagesDelivered = carrier.packages.filter(
    (pack) => pack.status === "ENTREGADO"
  );

  const percentage = Math.floor(
    (packagesDelivered.length / carrier.packages.length) * 100
  );

  const status = carrier.packages.some((pack) => pack.status === "EN CURSO")
    ? "EN CURSO"
    : "PENDIENTE";
  return (
    <div
      className="flex items-center justify-between py-4 border-t border-black"
      key={carrier._id}
    >
      <div className="flex items-center gap-4">
        <Graph value={percentage} size="md" />
        <div className="flex flex-col">
          <Title>{carrier.name}</Title>
          <Status status={status} />
        </div>
      </div>

      <div className="relative">
        <UserImg src="/users/user1.jpeg" alt="s" className="w-14 h-14" />
      </div>
    </div>
  );
}
