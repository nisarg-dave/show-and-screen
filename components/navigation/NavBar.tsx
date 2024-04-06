import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function NavBar() {
  return (
    <header className="bg-primary px-4 h-14 sticky z-30 top-0">
      <div className="flex justify-between pt-3">
        <Link className="text-xl font-semibold cursor-pointer" href="/">
          <span>Show & Screen</span>
        </Link>
        <nav className="">
          <Button className="h-8 bg-muted-foreground" variant="outline">
            Quick Action
          </Button>
          <Link className="font-medium text-sm ml-4 hover:underline" href="/">
            Watched
          </Link>
          <Link className="font-medium text-sm ml-4 hover:underline" href="/">
            To Watch
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
