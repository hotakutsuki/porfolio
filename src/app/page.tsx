"use client";
import React from "react";
import { useI18n } from "./i18n";
import Image from "next/image";
import profilePic from "../assets/profile.png";
import altscore from "../assets/logos/AltScore.jpg"
import gynger from "../assets/logos/Gynger.webp"
import buenaplan from "../assets/logos/BuenPlan.jpeg";
import adra from "../assets/logos/ADRA.png"
import bayteq from "../assets/logos/BAYTEQ.png"
import cargill from "../assets/logos/Cargill.jpg"
import jobsity from "../assets/logos/jobsity.png"
import grupoBarlovento from "../assets/logos/grupobarlovento.png"
import ministeriodecultura from "../assets/logos/Ministerio.jpg"
import nyancoffee from "../assets/logos/nyan.jpg"
import inkaGif from "../assets/projects/inkachess/inka.gif"
import iaGif from "../assets/projects/ia/evolution.gif"
import politicGif from "../assets/projects/politic/politic.gif"
import schoolGif from "../assets/projects/school/escuela.gif"
import { motion } from "motion/react"
import ProjectCard from "@/components/ProjectCard";
import ExperienceTime from "@/components/ExperienceTime";
import { socials, SocialIcon } from '@/components/SocialIcon'

export default function Home() {
    const { t } = useI18n();
    const logos = [
        altscore,
        gynger,
        cargill,
        jobsity,
        bayteq,
        buenaplan,
        grupoBarlovento,
        nyancoffee,
        adra,
        ministeriodecultura,
    ]
    const experiences = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ].map(i => ({
        company: t[`exp${i}_company`],
        logo: logos[i - 1],
        role: t[`exp${i}_role`],
        period: t[`exp${i}_period`],
        year: t[`exp${i}_year`],
        location: t[`exp${i}_location`],
        desc: t[`exp${i}_desc`],
        link: t[`exp${i}_link`],
        badges: ['React', 'TypeScript', 'Postgresql', 'Node.js'],
    }));

    const projects =
        [
            {
                name: t.proj1,
                desc: t.proj1_desc,
                link: "https://www.inkachess.com",
                image: inkaGif,
            },
            {
                name: t.proj2,
                desc: t.proj2_desc,
                link: t.proj2_link,
                image: iaGif,
            },
            {
                name: t.proj3,
                desc: t.proj3_desc,
                link: t.proj3_link,
                image: politicGif,
            },
            {
                name: t.proj4,
                desc: t.proj4_desc,
                link: t.proj4_link,
                image: schoolGif,
            },
        ]

    return (
        <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="flex justify-center">
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Image
                        src={profilePic}
                        alt="Profile picture of Josue Ortiz"
                        width={160}
                        height={160}
                        className="rounded-full shadow-lg object-cover w-64 h-64 mb-8"
                        priority
                    />
                </motion.div>
            </div>
            <div className="lg:hidden flex flex-col">
                <h1 className="text-4xl font-bold mb-2">{t.name}</h1>
                <h2 className="text-lg font-medium text-gray-500 dark:text-gray-300 mb-4">{t.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">{t.shortSummary}</p>
                <a href="/src/assets/Profile.pdf" target="_blank" rel="noopener noreferrer" >
                    <p className="text-primary font-semibold mb-8 hover:underline">
                        {t.download}
                    </p>
                </a>
                {/* Social icons */}
                <div className="flex gap-4 mt-auto mb-8">
                    {socials.map((s) => (
                        <SocialIcon key={s.icon} {...s} />
                    ))}
                </div>
            </div >
            {/* About Section */}
            <section id="about" className="mb-12 w-full max-w-2xl ">
                <h2 className="text-3xl font-bold mb-4">{t.about}</h2>
                <p className="max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t.summary}
                </p>
            </section>
            {/* Experience Section */}
            <section id="experience" className="mb-12 w-full md:w-2xl">
                <h2 className="text-3xl font-bold mb-4">{t.experience}</h2>
                <ul>
                    {experiences.map((exp, idx) => (
                        <li key={idx}>
                            {ExperienceTime(exp)}
                        </li>
                    ))}
                </ul>
            </section>
            {/* Projects Section */}
            <section id="projects" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{t.projects}</h2>
                <ul className="grid space-y-4 md:w-2xl w-md">
                    <div>
                        <ProjectCard project={projects[0]} />
                        <ProjectCard project={projects[1]} />
                    </div>
                    <div>
                        <ProjectCard project={projects[2]} />
                        <ProjectCard project={projects[3]} />
                    </div>
                </ul>
            </section>
            {/* Contact Section */}
            <section id="contact" className="mb-12">
                <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
                <ul className="space-y-2 md:w-2xl w-md">
                    <li>Email: <a href="mailto:jotakutsuki@gmail.com" className="underline text-primary hover:text-blue600 visited:text-purple-600">
                        <span className="sr-only">Email: </span>
                        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">jotakutsuki@gmail.com</span></a></li>
                    <li>Phone: <a href="tel:+593992989963" className="underline text-primary hover:text-accent">
                        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">+593992989963</span></a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/josue-ortiz-developer" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent">
                        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Josue Ortiz Developer</span></a></li>
                    <li>GitHub: <a href="https://github.com/hotakutsuki" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent">
                        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">hotakutsuki</span></a></li>
                </ul>
            </section>
            {/* Footer */}
            {/* <footer className="text-center py-8 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Josue Ortiz. All rights reserved.
            </footer> */}
        </div >
    );
}
