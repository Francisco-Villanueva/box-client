import React from "react";
import BoxLogo from "../../public/box-logo.png";
import Image from "next/image";

export function IconBoxLogin() {
  return (
    <div className="flex items-center justify-center w-52 h-16 bg-yellow rounded-t-3xl rounded-br-xl">
      <Image src={BoxLogo} alt="Boxlogo" height={48} />
    </div>
  );
}
