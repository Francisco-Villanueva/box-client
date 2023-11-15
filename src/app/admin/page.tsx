"use client";
import { DateBox, ShortArrowIcon, Title, UserImg } from "commons";
import { DetailView } from "components";
import Image from "next/image";

export default function AdminPage() {
  const days = [
    {
      day: "lun",
      date: 1,
    },
    {
      day: "mar",
      date: 2,
    },
    {
      day: "mie",
      date: 3,
    },
    {
      day: "jue",
      date: 4,
    },
    {
      day: "vie",
      date: 5,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white  flex items-center gap-2  p-4 rounded-2xl">
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
      </div>
      <div className="bg-white flex flex-col rounded-2xl">
        <div className="bg-lightGrey w-full p-2 rounded-t-2xl">
          <Title>ENERO</Title>
        </div>

        <div className="flex items-center justify-around w-full p-4">
          <ShortArrowIcon className="w-6 border  rounded-md border-darkGreen" />
          {days.map((dia) => (
            <DateBox date={dia.date} day={dia.day} variant="notSelected" />
          ))}
          <ShortArrowIcon className="w-6 border  rounded-md border-darkGreen" />
        </div>
      </div>

      <DetailView />
    </div>
  );
}
