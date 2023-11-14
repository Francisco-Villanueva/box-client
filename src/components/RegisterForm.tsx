import React from "react";
import { Button } from "commons";
import { CustomLink } from "commons";
import { CameraIcon } from "commons";
import { Input } from "commons";

export function RegisterForm() {
  return (
    <>
      <div className="bg-white rounded-2xl">
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
          <Button
            children={"CREAR"}
            variant="primary"
            className="w-full mb-3"
          />
          <Button
            children={"INICIAR SESIÓN"}
            variant="secondary"
            className="w-full"
          />
          <CustomLink href={"asdasd"} children={"¿Ya tenés una cuenta?"} />
        </section>
      </div>
    </>
  );
}
