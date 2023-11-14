"use client";
import { UserImg } from "commons";
import { Graph } from "commons/Graph";
import Status from "commons/Status";
import { log } from "console";

interface CarrierCardProps {
  carrier: User;
}

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  role: string;
  packages: Pack[];
}
interface Pack {
  _id: string;
  address: string;
  clientName: string;
  weight: number;
  deliverDate: string;
  status: string;
}
export default function CarrierCard({ carrier }: CarrierCardProps) {
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
      className="flex items-center justify-between p-4 border-b border-black"
      key={carrier._id}
    >
      <div className="flex items-center gap-4">
        <Graph children={percentage} size="md" />
        <div className="flex flex-col">
          <p className="font-semibold text-darkGreen text-lg">{carrier.name}</p>
          <Status status={status} />
        </div>
      </div>

      <div className="relative">
        <UserImg src="/users/user1.jpeg" alt="s" className="w-14 h-14" />
      </div>
    </div>
  );
}
