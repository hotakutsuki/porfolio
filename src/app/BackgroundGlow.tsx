"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function BackgroundGlow() {
    const glowRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            const x = e.clientX;
            const y = e.clientY;
            if (glowRef.current) {
                glowRef.current.style.background =
                    theme === "dark"
                        ? `radial-gradient(600px circle at ${x}px ${y}px, rgba(80,120,255,0.18), transparent 80%)`
                        : `radial-gradient(600px circle at ${x}px ${y}px, rgba(120,80,255,0.13), transparent 80%)`;
            }
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [theme]);

    return (
        <div
            ref={glowRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                transition: "background 0.2s",
                willChange: "background",
            }}
            aria-hidden
        />
    );
} 