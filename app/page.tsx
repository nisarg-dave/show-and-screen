"use client";

import { useEffect } from "react";
import { loginRequiredServer } from "./actions";

function Index() {
  useEffect(() => {
    const checkSession = async () => {
      await loginRequiredServer();
    };
    checkSession();
  }, []);
}

export default Index;
