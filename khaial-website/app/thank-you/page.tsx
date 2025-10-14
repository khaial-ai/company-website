"use client";

import { useEffect } from "react";

export default function ThankYouRedirectPage() {
  useEffect(() => {
    const accept = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
    const prefersAr = accept.includes("ar");
    const target = prefersAr ? "/ar/thank-you/" : "/en/thank-you/";
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}


