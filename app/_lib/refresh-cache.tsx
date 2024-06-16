"use client";
import { UserQueryQuery } from "@/graphql/generated";
import { useInterval } from "interval-hooks";

interface RefreshCacheProps {
  check: (currentUser: UserQueryQuery["user"]) => Promise<void>;
  currentUser: UserQueryQuery["user"];
}

function RefreshCache({ check, currentUser }: RefreshCacheProps) {
  useInterval(() => check(currentUser), 1000);
  return null;
}
export default RefreshCache;
