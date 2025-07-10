"use client";
import React from "react";
import { useI18n } from "./i18n";
import Image from "next/image";
import profilePic from "../assets/profile.png";

export default function Home() {
    const { t } = useI18n();
    const experiences = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ].map(i => ({
        company: t[`exp${i}_company`],
        role: t[`exp${i}_role`],
        period: t[`exp${i}_period`],
        location: t[`exp${i}_location`],
        desc: t[`exp${i}_desc`],
    }));
    return (
        <>
            {/* Profile Picture */}
            <div className="flex justify-start pl-48">
                <Image
                    src={profilePic}
                    alt="Profile picture of Josue Ortiz"
                    width={160}
                    height={160}
                    className="rounded-full shadow-lg object-cover w-40 h-40 mb-8"
                    priority
                />
            </div>
            {/* About Section */}
            <section id="about" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                    {t.summary}
                </p>
            </section>
            {/* Experience Section */}
            <section id="experience" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{t.experience}</h2>
                <ul className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <li key={idx} className="">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                                    <span className="block text-base text-gray-500 dark:text-gray-400">{exp.role}</span>
                                </div>
                                <div className="text-sm text-gray-400 mt-1 md:mt-0 md:text-right">
                                    {exp.period}{exp.location ? ` | ${exp.location}` : ""}
                                </div>
                            </div>
                            {exp.desc && (
                                <div className="mt-2 whitespace-pre-line text-gray-600 dark:text-gray-300 text-sm">
                                    {exp.desc}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
            {/* Projects Section */}
            <section id="projects" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{t.projects}</h2>
                <ul className="space-y-4">
                    <li>
                        <h3 className="text-xl font-semibold">{t.proj1}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{t.proj1_desc || "Coming soon!"}</p>
                    </li>
                    <li>
                        <h3 className="text-xl font-semibold">{t.proj2}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{t.proj2_desc || "Coming soon!"}</p>
                    </li>
                    <li>
                        <h3 className="text-xl font-semibold">{t.proj3}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{t.proj3_desc || "Coming soon!"}</p>
                    </li>
                    <li>
                        <h3 className="text-xl font-semibold">{t.proj4}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{t.proj4_desc || "Coming soon!"}</p>
                    </li>
                </ul>
            </section>
            {/* Contact Section */}
            <section id="contact" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
                <ul className="space-y-2">
                    <li>Email: <a href="mailto:jotakutsuki@gmail.com" className="underline text-primary hover:text-accent">jotakutsuki@gmail.com</a></li>
                    <li>Phone: <a href="tel:+593992989963" className="underline text-primary hover:text-accent">+593992989963</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/josue-ortizdeveloper" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent">josue-ortizdeveloper</a></li>
                    <li>GitHub: <a href="https://github.com/hotakutsuki" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent">hotakutsuki</a></li>
                </ul>
            </section>
            {/* Footer */}
            <footer className="text-center py-8 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Josue Ortiz. All rights reserved.
            </footer>
        </>
    );
}
