import React from "react";

import { CustomLink, CameraIcon, Button, Input } from "commons";
import Link from "next/link";
import { message } from "antd";

export function RegisterForm() {
  return (
    <>
      <div className="bg-white rounded-2xl h-auto">
        <div className="flex justify-center items-center pt-4">
          <div className="bg-lightGrey flex justify-center items-center rounded-3xl w-24 h-24 ">
            <CameraIcon className="h-8" />
          </div>
        </div>
        <section>
          <div className="pl-5 pr-5">
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
            <Input placeholder="Email" />
            <Input placeholder="Contraseña" type="password" />
            <Input placeholder="Confirmar contraseña" type="password" />
          </div>
        </section>
        <section className="pt-8 pl-3.5 pr-3.5 flex flex-col items-center pb-6">
          <Link
            href={"/login"}
            className="w-full flex justify-center">
            <Button
              children={"CREAR"}
              variant="primary"
              className="w-full mb-3"
              onClick={() => message.success("Cuenta creada exitosamente")}
            />
          </Link>
          {/* <Button
            children={"INICIAR SESIÓN"}
            variant="secondary"
            className="w-full"
          /> */}
          <CustomLink href={"/login"} children={"¿Ya tenés una cuenta?"} />
        </section>
      </div>
    </>
  );
}
