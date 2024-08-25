"use client";
import { useEffect } from "react";
import { getSession } from "./actions";
import { useRouter } from "next/navigation";

function Index() {
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push("/home");
      } else {
        router.push("/signup");
      }
    };
    checkSession();
  }, []);
}

export default Index;
