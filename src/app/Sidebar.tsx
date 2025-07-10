"use client";
import { useTheme } from "./ThemeProvider";
import { useI18n } from "./i18n";
import type { JSX } from 'react';
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const socials = [
    { href: "https://github.com/hotakutsuki", icon: "github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/josue-ortizdeveloper", icon: "linkedin", label: "LinkedIn" },
    { href: "https://wa.me/593992989963", icon: "whatsapp", label: "WhatsApp" },
    { href: "https://instagram.com/", icon: "instagram", label: "Instagram" },
];

function SocialIcon({ icon, href, label }: { icon: string; href: string; label: string }) {
    // Use SVGs for icons (simple placeholders for now)
    const icons: Record<string, JSX.Element> = {
        github: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" /></svg>,
        linkedin: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 8a6 6 0 0 1 6 6v6" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8" /></svg>,
        whatsapp: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.05 11.5A9 9 0 1 0 3 17.7l-1 4.3 4.4-1.1A9 9 0 1 0 21.05 11.5z" /><path d="M16.5 13.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.6.7-.7.8-.1.1-.3.2-.5.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3-.1 0-.3 0-.4.1-.1.1-.5.5-.5 1.2 0 .7.5 1.4 1.1 2 .7.7 1.6 1.2 2.3 1.2.7 0 1.1-.3 1.2-.4.1-.1.2-.2.3-.3.1-.1.1-.2.1-.3 0-.1-.1-.2-.2-.3z" /></svg>,
        instagram: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg>,
    };
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ color: 'var(--secondary)', marginRight: 12 }}>
            {icons[icon]}
        </a>
    );
}

export default function Sidebar() {
    const { theme, toggleTheme } = useTheme();
    const { t } = useI18n();
    return (
        <aside className="hidden md:flex flex-col items-start min-h-screen w-[400px] px-8 pt-8 fixed left-0 top-0 bg-transparent z-10">
            {/* Theme toggle */}
            <button onClick={toggleTheme} aria-label="Toggle theme" className="mb-8 text-2xl text-gray-500 dark:text-gray-300 hover:text-primary transition-colors">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <h1 className="text-4xl font-bold mb-2">{t.name}</h1>
            <h2 className="text-lg font-medium text-gray-500 dark:text-gray-300 mb-4">{t.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base max-w-lg">{t.shortSummary}</p>
            <a href="/src/assets/Profile.pdf" target="_blank" rel="noopener noreferrer" className="underline text-primary font-semibold mb-8 hover:text-accent transition-colors">
                {t.download}
            </a>
            {/* Navigation */}
            <nav className="flex flex-col w-full mb-8">
                <ul className="flex flex-col gap-2 w-full">
                    <li><a href="#about" className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:text-primary transition-colors">{t.about}</a></li>
                </ul>
                <Accordion type="multiple" className="w-full mt-2">
                    <AccordionItem value="experience">
                        <AccordionTrigger className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:text-primary transition-colors">
                            {t.experience}
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-2 flex flex-col gap-1">
                                <li><a href="#experience" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.exp1}</a></li>
                                <li><a href="#experience" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.exp2}</a></li>
                                <li><a href="#experience" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.exp3}</a></li>
                                <li><a href="#experience" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.exp4}</a></li>
                                <li><a href="#experience" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.exp5}</a></li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="projects">
                        <AccordionTrigger className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:text-primary transition-colors">
                            {t.projects}
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-2 flex flex-col gap-1">
                                <li><a href="#projects" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.proj1}</a></li>
                                <li><a href="#projects" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.proj2}</a></li>
                                <li><a href="#projects" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.proj3}</a></li>
                                <li><a href="#projects" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">{t.proj4}</a></li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <ul className="flex flex-col gap-2 w-full mt-2">
                    <li><a href="#contact" className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:text-primary transition-colors">{t.contact}</a></li>
                </ul>
            </nav>
            {/* Social icons */}
            <div className="flex gap-4 mt-auto mb-8">
                {socials.map((s) => (
                    <SocialIcon key={s.icon} {...s} />
                ))}
            </div>
        </aside>
    );
} 