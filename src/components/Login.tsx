import React from "react";

import { CustomLink, IconBoxLogin, Button, Input } from "commons";

export function Login() {
  return (
    <>
      <div className="w-full h-auto rounded-3xl bg-lightGreen ">
        <div className=" w-full absolute -mt-8">
          <IconBoxLogin />
        </div>
        <section className="pt-10 pl-3.5 pr-3.5">
          <Input placeholder="Email@contraseña.com" />
          <Input placeholder="Password" type="password" />
        </section>
        <section className="pt-8 pl-3.5 pr-3.5 flex flex-col items-center pb-5">
          <Button
            children={"INGRESAR"}
            variant="primary"
            className="w-full mb-2"
          />
          <Button
            children={"CREAR CUENTA"}
            variant="secondary"
            className="w-full"
          />
          <CustomLink href={"asdasd"} children={"Olvidé mi contraseña"} />
        </section>
      </div>
    </>
  );
}
