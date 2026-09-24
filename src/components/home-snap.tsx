"use client";

import { useEffect } from "react";

export function HomeSnap() {
  useEffect(() => {
    document.documentElement.classList.add("home-snap");
    return () => document.documentElement.classList.remove("home-snap");
  }, []);

  return null;
}
