import SignUpForm from "@/components/authentication/SignUpForm";
import React from "react";

function page() {
  return (
    <div className="text-secondary">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Create an account
      </h1>
      <SignUpForm />
    </div>
  );
}

export default page;
