"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Index() {
  const router = useRouter();
  useEffect(() => {
    if (true) {
      router.push("/signup");
    } else {
      router.push("/home");
    }
  }, []);
}

export default Index;
