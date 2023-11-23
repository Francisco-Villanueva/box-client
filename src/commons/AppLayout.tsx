import React, { ReactNode } from "react";
import BoxLogo from "../../public/boxLogo-2.png";
import Image from "next/image";
import { Button, BodyLayout } from "commons";
import { observer } from "mobx-react-lite";
import { useStore } from "models/root.store";
import { useRouter } from "next/navigation";
import { message } from "antd";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export const AppLayout = observer(function ({
  children,
  className,
}: AppLayoutProps) {
  const {
    users: { setUserLoggedId },
  } = useStore();
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.setItem("USER_LOGGED_ID", "");
    message.success("Has cerrado sesión");
    setUserLoggedId("");
    router.push("/login");
  };

  return (
    <div className=" flex flex-col gap-4 bg-lightGreen w-full min-h-screen overflow-auto p-3">
      <div className="flex justify-between items-center">
        <div>
          <Button variant="secondary" className="border-none">
            <Image src={BoxLogo} alt="boxLogo" width={100} />
          </Button>
        </div>
        <div>
          <Button
            onClick={handleLogOut}
            children={"CERRAR SESIÓN"}
            variant="secondary"
            className="w-30 h-8 text-xs"
          />
        </div>
      </div>
      <BodyLayout>{children}</BodyLayout>
    </div>
  );
});
