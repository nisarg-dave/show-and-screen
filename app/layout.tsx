import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { ApolloWrapper } from "@/app/_lib/Apollo-Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-foreground`}>
        <ApolloWrapper>
          <NavBar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
