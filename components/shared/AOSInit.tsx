"use client";

import { useEffect } from "react";

export function AOSInit() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: "ease-in-out",
      });
    });
  }, []);

  return null;
}
