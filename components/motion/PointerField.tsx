"use client";

import { useEffect } from "react";

export function PointerField() {
  useEffect(() => {
    const root = document.documentElement;
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--px", String(event.clientX / window.innerWidth));
      root.style.setProperty("--py", String(event.clientY / window.innerHeight));
    };
    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      root.style.setProperty("--px", String(touch.clientX / window.innerWidth));
      root.style.setProperty("--py", String(touch.clientY / window.innerHeight));
    };
    const onOrient = (event: DeviceOrientationEvent) => {
      if (event.gamma == null || event.beta == null) return;
      root.style.setProperty("--px", String((event.gamma + 45) / 90));
      root.style.setProperty("--py", String((event.beta + 45) / 90));
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("deviceorientation", onOrient, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);
  return null;
}
