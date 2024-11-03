import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}

export default layout;
