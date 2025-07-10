"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <nav>
            <div style={{ fontWeight: 700, fontSize: "1.5rem" }}>Josue Ortiz</div>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                <Link href="#about">About</Link>
                <Link href="#experience">Experience</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
                <Link href="/src/assets/Profile.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                </Link>
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                    }}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    );
} 