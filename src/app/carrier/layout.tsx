"use client";
import { AppLayout } from "commons";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
