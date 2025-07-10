"use client";
import { useI18n } from "../app/i18n";

export default function LanguageDropdown() {
    const { lang, setLang } = useI18n();
    return (
        <div className="fixed top-6 right-8 z-50">
            <select
                className="bg-transparent border dark:border-gray-700 border-gray-200 rounded px-2 py-1 text-sm text-gray-700 dark:text-gray-200"
                value={lang}
                onChange={e => setLang(e.target.value)}
            >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="jp">JP</option>
            </select>
        </div>
    );
} 