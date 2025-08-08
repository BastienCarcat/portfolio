"use client";

import { useState, useEffect } from "react";

export enum Breakpoint {
  Xs = "xs",
  SM = "sm",
  Md = "md",
  Lg = "lg",
  Xl = "xl",
  Xxl = "2xl",
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.Md);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setBreakpoint(Breakpoint.Xs);
      } else if (width < 768) {
        setBreakpoint(Breakpoint.SM);
      } else if (width < 1024) {
        setBreakpoint(Breakpoint.Md);
      } else if (width < 1280) {
        setBreakpoint(Breakpoint.Lg);
      } else if (width < 1536) {
        setBreakpoint(Breakpoint.Xl);
      } else {
        setBreakpoint(Breakpoint.Xxl);
      }
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
}
