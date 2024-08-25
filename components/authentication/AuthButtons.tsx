"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

export function GoogleAuthButton() {
  return (
    <Button
      type="submit"
      className="w-full bg-card-foreground hover:bg-purple-800 mt-6"
      onClick={() => {
        signIn("google");
      }}
    >
      <Image src="/Google.svg" alt="Google" width={40} height={40} />
      <p className="ml-2">Continue with Google</p>
    </Button>
  );
}
