import React from "react";
import NavBar from "@/components/navigation/NavBar";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Toaster />
    </>
  );
}

export default layout;
