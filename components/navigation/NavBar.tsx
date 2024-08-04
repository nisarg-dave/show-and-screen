import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function NavBar() {
  return (
    <header className="bg-primary px-4 h-14 sticky z-30 top-0 text-secondary">
      <div className="flex justify-between pt-3">
        <Link className="text-xl font-semibold cursor-pointer" href="/home">
          <span>Show & Screen</span>
        </Link>
        <nav className="mt-1">
          <Link
            className="font-medium text-sm ml-4 hover:underline"
            href="/watched"
          >
            Watched
          </Link>
          <Link
            className="font-medium text-sm ml-4 hover:underline"
            href="/toWatch"
          >
            To Watch
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
