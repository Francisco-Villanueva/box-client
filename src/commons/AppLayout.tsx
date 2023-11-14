import React, { ReactNode } from "react";
import BoxLogo from "../../public/boxLogo-2.png";
import Image from "next/image";
import { Button } from "commons";


interface AppLayoutProps {
  children: ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className="bg-lightGreen w-full min-h-screen overflow-auto pl-3 pr-3 pt-3">
      <div className="pb-3 flex justify-between items-center">
        <div>
          <Image src={BoxLogo} alt="boxLogo" width={100}  />
        </div>
        <div>
          <Button children={"CERRAR SESIÓN"} variant="secondary" className="w-30 h-8 text-xs"  />
        </div>
      </div>
      <div className="pb-2">{children}</div>
    </div>
  );
}