import React, { useState } from "react";

import { CustomLink, CameraIcon, Button, Input } from "commons";

import { FormInput } from "./FormInput";

import Link from "next/link";
import { message } from "antd";

export function RegisterForm() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInput = (key: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
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
            <FormInput
              type="text"
              placeholder="Name"
              reference="name"
              handleInput={handleInput}
              validation="email"
            />
            <FormInput
              type="text"
              placeholder="Email"
              reference="email"
              handleInput={handleInput}
              validation="email"
            />

            <FormInput
              placeholder="Password"
              type="password"
              reference="password"
              handleInput={handleInput}
              validation="password"
            />
            <FormInput
              placeholder="Confirm Password"
              type="password"
              reference="confirmPassword"
              handleInput={handleInput}
              validation="password"
            />
          </div>
        </section>
        <section className="pt-8 pl-3.5 pr-3.5 flex flex-col items-center pb-6">
          <Link href={"/login"} className="w-full flex justify-center">
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
