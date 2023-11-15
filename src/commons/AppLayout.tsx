import React, { ReactNode } from "react";
import BoxLogo from "../../public/boxLogo-2.png";
import Image from "next/image";
import { Button, BodyLayout } from "commons";

interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: AppLayoutProps) {
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
            children={"CERRAR SESIÓN"}
            variant="secondary"
            className="w-30 h-8 text-xs"
          />
        </div>
      </div>
      <BodyLayout>{children}</BodyLayout>
    </div>
  );
}
