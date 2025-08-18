import { useCallback, useRef, useMemo } from "react";
import { throttle } from "lodash";
import { MotionStyle } from "motion/react";

interface Use3DCardEffectOptions {
  rotationIntensity?: number;
  throttleMs?: number;
  hoverZone?: number; // Pixels around the card to trigger the effect
  dampingFactor?: number; // Damping factor for edges
}

export function use3DCardEffect({
  rotationIntensity = 10,
  throttleMs = 16,
  hoverZone = 200,
  dampingFactor = 0.8,
}: Use3DCardEffectOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const throttledHandler = useMemo(
    () =>
      throttle((event: MouseEvent) => {
        if (!elementRef.current || !containerRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Distance from mouse to center
        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;

        // Calculate rotations
        let rotateX = -distanceY / rotationIntensity;
        let rotateY = distanceX / rotationIntensity;

        // Damping near edges to avoid jittering
        const edgeThreshold = Math.min(rect.width, rect.height) * 0.1;
        const distanceFromEdgeX = Math.min(
          Math.abs(event.clientX - rect.left),
          Math.abs(rect.right - event.clientX),
        );
        const distanceFromEdgeY = Math.min(
          Math.abs(event.clientY - rect.top),
          Math.abs(rect.bottom - event.clientY),
        );

        if (
          distanceFromEdgeX < edgeThreshold ||
          distanceFromEdgeY < edgeThreshold
        ) {
          rotateX *= dampingFactor;
          rotateY *= dampingFactor;
        }

        // Limit maximum rotations
        rotateX = Math.max(-15, Math.min(15, rotateX));
        rotateY = Math.max(-15, Math.min(15, rotateY));

        elementRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`;
      }, throttleMs),
    [rotationIntensity, throttleMs, dampingFactor],
  );

  // Global handler to capture movements in the extended zone
  const handleGlobalMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!elementRef.current || !containerRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const extendedRect = {
        left: rect.left - hoverZone,
        right: rect.right + hoverZone,
        top: rect.top - hoverZone,
        bottom: rect.bottom + hoverZone,
      };

      // Check if mouse is in the extended zone
      if (
        event.clientX >= extendedRect.left &&
        event.clientX <= extendedRect.right &&
        event.clientY >= extendedRect.top &&
        event.clientY <= extendedRect.bottom
      ) {
        throttledHandler(event);
      } else {
        // Reset if we exit the zone
        throttledHandler.cancel();
        if (elementRef.current) {
          elementRef.current.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        }
      }
    },
    [throttledHandler, hoverZone],
  );

  // Add/remove global listener
  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleGlobalMouseMove);
  }, [handleGlobalMouseMove]);

  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleGlobalMouseMove);

    // Cancel any pending throttled executions
    throttledHandler.cancel();

    if (elementRef.current) {
      elementRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  }, [handleGlobalMouseMove, throttledHandler]);

  const containerStyle = {
    padding: `${hoverZone}px`,
    margin: `-${hoverZone}px`,
  } as React.CSSProperties;

  const cardStyle = {
    transformStyle: "preserve-3d",
    transition: "transform 0.3s ease-out",
  } as MotionStyle;

  return {
    containerRef,
    containerStyle,
    ref: elementRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: cardStyle,
  };
}
