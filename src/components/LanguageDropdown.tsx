"use client";
import { useTheme } from "../app/ThemeProvider";
import { useI18n } from "../app/i18n";
import { useState } from "react"
import { motion } from "motion/react"

export default function LanguageDropdown() {
    const { theme, toggleTheme } = useTheme();
    const { setLang } = useI18n();
    const [x, setX] = useState(-10)
    const [width, setWidth] = useState(50)

    return (
        <div className="fixed top-6 right-8 z-50 space-x-4">
            <motion.div
                animate={{ x, width }}
                className="absolute bg-indigo-300 dark:bg-indigo-600 -z-1 rounded-md h-12 -top-1 border"
            />
            <button onClick={() => {
                setLang('en')
                setX(-10)
                setWidth(50)
            }}>
                ENG
            </button>
            <button onClick={() => {
                setLang('es')
                setX(35)
                setWidth(50)
            }}>
                ESP
            </button>
            <button onClick={() => {
                setLang('jp')
                setX(78)
                setWidth(70)
            }}>
                日本語
            </button>
            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Toggle theme" className="mb-8 text-2xl text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    );
} 