import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function BoxLayout({ children, className }: LayoutProps) {
  return (
    <div className={`h-full w-full rounded-xl shadow-sm  border ${className}`}>
      {children}
    </div>
  );
}
