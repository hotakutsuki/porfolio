import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

function getWindowDimensions() {
    if (typeof window === 'undefined') {
        return {
            width: 1200,
            height: 800
        };
    }

    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

interface ExperienceTimeProps {
    year: string;
    logo: StaticImageData;
    company: string;
    role: string;
    badges: string[];
    desc: string;
}

interface WindowDimensions {
    width: number;
    height: number;
}

export default function ExperienceTime(exp: ExperienceTimeProps) {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());
    const [isHover, setIsHover] = useState<boolean>(false);
    const [keepOpen, setKeepOpen] = useState<boolean>(false);
    const [openHeight, setOpenHeight] = useState<number>(220);
    const [closeHeight, setCloseHeight] = useState<number>(90);
    // const bigHeight = 200

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        if (windowDimensions.width < 640) {
            setOpenHeight(280)
            setCloseHeight(110)
        }
        if (windowDimensions.width > 640) {
            setOpenHeight(220)
            setCloseHeight(90)
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (<motion.div
        initial={{ height: keepOpen ? openHeight : closeHeight }}
        whileHover={{ height: openHeight }}
        animate={{ height: keepOpen ? openHeight : closeHeight }}
        exit={{ height: keepOpen ? openHeight : closeHeight }}
        className={`relative ${keepOpen && "border border-indigo-300 dark:border-indigo-300 shadow rounded-xl bg-background dark:bg-secondary"} my-2 py-4 md:py-0 pr-4`}
        style={{ height: keepOpen ? openHeight : closeHeight }}
        onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)}
        onClick={() => setKeepOpen(!keepOpen)}
    >
        <div className="w-0.5 h-full bg-indigo-300 dark:bg-indigo-300 absolute left-16 sm:left-18 -z-1 top-8 rounded-md" />
        {/* <div className="w-5 h-1 bg-cyan-700 dark:bg-cyan-200 absolute left-16 -bottom-9 -z-1 rounded-md" /> */}
        <div className="flex-col">
            <div className="md:py-4 flex flex-row justify-between">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row items-center">
                        <div className="text-sm text-gray-400 mt-1 w-12 flex justify-center">
                            {/* {exp.period}{exp.location ? ` | ${exp.location}` : ""} */}
                            {exp.year}
                        </div>
                        <Image
                            src={exp.logo}
                            width={100}
                            height={100}
                            alt="Profile picture of Josue Ortiz"
                            className="rounded-full shadow-lg object-cover w-12 h-12 mr-6 border-2 border-indigo-300"
                            priority
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{exp.company}
                                {/* <a href={exp.link} target="_blank" rel="noopener noreferrer" className="">🔗</a> */}
                            </h3>
                            <span className="block text-base text-gray-500 dark:text-gray-400">{exp.role}</span>
                        </div>
                    </div>
                    <div className="w-40 h-full space-x-1 space-y-1 flex flex-wrap justify-end">
                        {exp.badges.map((badge, idx) => (
                            <Badge key={idx} className="bg-indigo-400 dark:bg-indigo-300 border-indigo-500 h-6 text-xs">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
            {(isHover || keepOpen) && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-2 ml-28 max-w-xl whitespace-pre-line text-gray-600 dark:text-gray-300 text-sm">
                {exp.desc}
            </motion.div>}
        </div>
    </motion.div>
    )
}