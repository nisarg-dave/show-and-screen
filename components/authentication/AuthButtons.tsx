"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";

export function GoogleAuthButton() {
  return (
    <Button
      type="submit"
      className="w-full bg-card-foreground hover:bg-purple-800 mt-6"
      onClick={() => {
        signIn("google", {
          callbackUrl: `http://localhost:3000/home`,
        });
      }}
    >
      <Image src="/Google.svg" alt="Google" width={40} height={40} />
      <p className="ml-2">Continue with Google</p>
    </Button>
  );
}

export function LogOutButton() {
  return (
    <DropdownMenuShortcut>
      <LogOut className="mr-2 h-4 w-4" />
      <span
        onClick={() => signOut({ callbackUrl: `http://localhost:3000/signup` })}
      >
        Log out
      </span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuShortcut>
  );
}
