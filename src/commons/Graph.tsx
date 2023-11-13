import React from "react";
import { ProgressCircle } from "@tremor/react";

const sizeVariant = ["xs", "sm", "md", "lg", "xl"] as const;

interface GraphProps {
  children: number;
  size: (typeof sizeVariant)[number];
}

export function Graph({ children, size }: GraphProps) {
  return (
    <ProgressCircle value={children} size={size}>
      <span className="text-lg text-darkGreen font-medium">{`${children}%`}</span>
    </ProgressCircle>
  );
}
