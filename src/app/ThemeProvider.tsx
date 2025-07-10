"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext<any>(null);

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
} 