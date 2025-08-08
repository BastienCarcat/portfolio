"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface AnimationContextType {
  persistedProgress: number;
  setPersistedProgress: (progress: number) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [persistedProgress, setPersistedProgress] = useState(0);
  // const pathname = usePathname();

  // useEffect(() => {
  //   // Reset seulement si on est sur la page root et que c'est un refresh manuel
  //   const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
  //   if (pathname === "/" && navigationEntry?.type === "reload") {
  //     setPersistedProgress(0);
  //   }
  // }, [pathname]);

  return (
    <AnimationContext.Provider
      value={{ persistedProgress, setPersistedProgress }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
