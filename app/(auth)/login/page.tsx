"use client";

import LogInForm from "@/components/authentication/LogInForm";
import SignUpForm from "@/components/authentication/SignUpForm";
import Image from "next/image";
import { useState } from "react";

function page() {
  const [signup, setSignup] = useState(false);
  return (
    <div className="text-secondary">
      <div className="flex justify-center mb-2 gap-2">
        <Image src="/reel.png" alt="Reel" width={50} height={50} />
        <h1 className="text-3xl font-bold tracking-tight text-center pt-2">
          Show and Screen
        </h1>
      </div>
      {signup ? (
        <SignUpForm setSignup={setSignup} signup={signup} />
      ) : (
        <LogInForm setSignup={setSignup} signup={signup} />
      )}
    </div>
  );
}

export default page;
