"use client";
import { AddIcon, Button, Title } from "commons";
import { Calendar, DetailView } from "components";
import Image from "next/image";

export default function AdminPage() {
  return (
    <div className="flex flex-col justify-between gap-2 h-full">
      <section className="bg-white  flex items-center gap-2  p-4  rounded-2xl">
        <Image
          src="/users/user1.jpeg"
          alt="s"
          width={100}
          height={100}
          className="rounded-2xl "
        />

        <div>
          <Title>Hola Admin!</Title>
          <span>Estos son los pedidos del dia</span>
        </div>
      </section>
      {/* */}
      <section className="bg-white flex flex-col h-1/4 rounded-2xl">
        <div className="bg-lightGrey w-full p-2 px-4 rounded-t-2xl">
          <Title>NOVIEMBRE</Title>
        </div>

        <Calendar />
      </section>
      {/* */}
      <DetailView />

      <Button>
        <span className="flex justify-center items-center   gap-2 ">
          Nuevo Paquete
          <AddIcon className="w-4" />
        </span>
      </Button>
    </div>
  );
}
