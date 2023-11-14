import Input from "commons/Input";
import React from "react";
import { Button } from "commons/Button";
import CustomLink from "commons/CustomLink";
import IconBoxLogin from "commons/IconBoxLogin";

export default function Login() {
  return (
    <>
      <div className="absolute -mt-8">
        <IconBoxLogin />
      </div>
      <div className="w-full h-auto rounded-3xl bg-lightGreen mt-[30%]">
        <section className="pt-10 pl-3.5 pr-3.5">
          <Input placeholder="Email@contraseña.com" />
          <Input placeholder="Password" type="password" />
        </section>
        <section className="pt-8 pl-3.5 pr-3.5 flex flex-col items-center pb-5">
          <Button children={"INGRESAR"} variant="primary" className="w-full mb-2" />
          <Button children={"CREAR CUENTA"} variant="secondary" className="w-full" />
          <CustomLink href={"asdasd"} children={"Olvidé mi contraseña"} />
        </section>
      </div>
    </>
  );
}
