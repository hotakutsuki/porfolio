"use client";
import { useI18n } from "./i18n";
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { socials, SocialIcon } from '@/components/SocialIcon'

export default function Sidebar() {
    const { t } = useI18n();
    return (
        <aside className="hidden lg:flex flex-col items-start min-h-screen w-[256px] px-8 pt-20 fixed left-0 top-0 bg-transparent z-10">
            <h1 className="text-4xl font-bold mb-2">{t.name}</h1>
            <h2 className="text-lg font-medium text-gray-500 dark:text-gray-300 mb-4">{t.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base max-w-lg">{t.shortSummary}</p>
            <a href="/src/assets/Profile.pdf" target="_blank" rel="noopener noreferrer" >
                <p className="text-primary font-semibold mb-8 hover:underline">
                    {t.download}
                </p>
            </a>
            {/* Navigation */}
            <nav className="flex flex-col w-full mb-8">
                <ul className="flex flex-col gap-2 w-full">
                    <li><a href="#about">
                        <p className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:underline">{t.about}</p>
                    </a></li>
                </ul>
                <Accordion type="multiple" className="w-full mt-2">
                    <AccordionItem value="experience">
                        <AccordionTrigger className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:text-primary transition-colors">
                            {t.experience}
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="ml-2 flex flex-col gap-1">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                                    <li key={i}>
                                        <a href="#experience" className="text-base text-gray-700 dark:text-gray-300 hover:text-primary">
                                            {t[`exp${i}_company`]}
                                        </a>
                                    </li>
                                ))}
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
                    <li><a href="#contact">
                        <p className="text-lg font-bold tracking-widest text-gray-800 dark:text-gray-100 hover:underline">
                            {t.contact}
                        </p></a>
                    </li>
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