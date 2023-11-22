import React, { useCallback, useState } from "react";
import { message } from "antd";
import { CustomLink, IconBoxLogin, Button, Input } from "commons";
import Link from "next/link";
import useInput from "hooks/useInput";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";
import { useRouter } from "next/navigation";
import { FormInput } from "./FormInput";

export const Login = observer(function () {
  const {
    users: { findUserByEmail, validatePassword, setUserLoggedId, setUserId },
  } = useStore();

  const [userData, setUserData] = useState({
    mail: "",
    password: "",
  });
  const handleInput = (key: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const router = useRouter();

  const handleLogin = useCallback(
    (event: any) => {
      event.preventDefault();
      const userToCheck = findUserByEmail(userData.mail);


      if (!userToCheck) {
        return message.error("Credenciales inválidas");
      }

      const isCorrectPassword = validatePassword(
        userToCheck,
        userData.password
      );

      if (!isCorrectPassword) {
        return message.error("Credenciales inválidas");
      }

      if (userToCheck.status === "DESHABILITADO") {
        message.error(
          `Lo sentimos ${userToCheck.name}. Tu usuario se encuentra deshabilitado`
        );
      } else if (userToCheck.role === "Admin") {
        message.success(`Bienvenido ${userToCheck.name}`);
        router.push("/admin");
        localStorage.setItem("USER_LOGGED_ID", userToCheck._id);
        setUserLoggedId(userToCheck._id);
        setUserId(userToCheck._id);
      } else {
        message.success(`Bienvenido ${userToCheck.name}`);
        router.push("/carrier");
        localStorage.setItem("USER_LOGGED_ID", userToCheck._id);
        setUserLoggedId(userToCheck._id);
        setUserId(userToCheck._id);
      }
    },
    [
      userData.mail,
      userData.password,
      router,
      setUserLoggedId,
      setUserId,
      validatePassword,
      findUserByEmail,
    ]
  );

  return (
    <form onSubmit={handleLogin}>
      <div className="w-full h-[60%] rounded-3xl bg-lightGreen flex flex-col justify-center gap-10 pt-8 relative">
        <div className=" absolute w-full  top-[-30px]">
          <IconBoxLogin />
        </div>
        <div className="p-4  flex flex-col items-center gap-10 ">
          <section className="flex flex-col gap-2 w-full">
            <FormInput
              type="text"
              placeholder="Email@contraseña.com"
              reference="mail"
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
          </section>
          <section className="flex flex-col items-center w-5/6">
            <Button
              children={"INGRESAR"}
              variant="primary"
              className="w-full mb-2"
              type="submit"
            />
            <Link href={"/register"} className="w-full flex justify-center">
              <Button
                children={"CREAR CUENTA"}
                variant="secondary"
                className="w-full"
              />
            </Link>
            <CustomLink
              href={"asdasd"}
              children={"Olvidé mi contraseña"}
              className="mb-4"
            />
          </section>
        </div>
      </div>
    </form>
  );
});
