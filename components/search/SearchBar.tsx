"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import DropDown from "./DropDown";
function SearchBar() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (mediaName: string) => {
    setOpen(!open);
    setInput(mediaName);
  };

  return (
    <>
      <Input
        className="w-[80vw] bg-muted-foreground text-secondary"
        onClick={() => setOpen(!open)}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {open ? <DropDown handleSelect={handleSelect} input={input} /> : null}
    </>
  );
}

export default SearchBar;
