import Image from "next/image";
import { ReactNode } from "react";

interface UserImgProps {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

export function UserImg({ src, alt, className, children }: UserImgProps) {
  return (
    <div
      className={`flex items-center justify-center font-bold w-10 h-10 border-solid  border-2 border-white bg-cover ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full rounded-full"
        fill
        objectFit="cover"
      />
      {children}
    </div>
  );
}
