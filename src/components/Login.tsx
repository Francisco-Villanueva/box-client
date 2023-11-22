import React, { useCallback } from "react";
import { message } from "antd";
import { CustomLink, IconBoxLogin, Button, Input } from "commons";
import Link from "next/link";
import useInput from "hooks/useInput";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";
import { useRouter } from "next/navigation";

export const Login = observer(function () {
  const {
    users: { findUserByEmail, validatePassword, setUserLoggedId, setUserId },
  } = useStore();
  const mailInput = useInput("");
  const passwordInput = useInput("");
  const router = useRouter();

  const handleLogin = useCallback(
    (event:any) => {
      event.preventDefault(); 
      const userToCheck = findUserByEmail(mailInput.value);

      if (!userToCheck) {
        return message.error("Credenciales inválidas");
      }

      const isCorrectPassword = validatePassword(
        userToCheck,
        passwordInput.value
      );

      if (!isCorrectPassword) {
        return message.error("Credenciales inválidas");
      }

      if (userToCheck.role === "Admin") {
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
    [mailInput.value, passwordInput.value, router, setUserLoggedId, setUserId, validatePassword, findUserByEmail]
  );

  return (
    <form onSubmit={handleLogin}>
      <div className="w-full h-[60%] rounded-3xl bg-lightGreen flex flex-col justify-center gap-10 pt-8 relative">
        <div className=" absolute w-full  top-[-30px]">
          <IconBoxLogin />
        </div>
        <div className="p-4  flex flex-col items-center gap-10 ">
          <section className="flex flex-col gap-2 w-full">
            <Input placeholder="Email@contraseña.com" {...mailInput} />
            <Input placeholder="Password" type="password" {...passwordInput} />
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