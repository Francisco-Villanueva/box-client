import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function BoxLayout({ children, className }: LayoutProps) {
  return (
    <div className={`w-full rounded-2xl shadow-sm  border ${className}`}>
      {children}
    </div>
  );
}
