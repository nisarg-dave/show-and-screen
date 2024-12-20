import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/app/_lib/Apollo-Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Show and Screen",
  description: "Generated by create next app",
  icons: {
    icon: "/reel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-foreground`}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
