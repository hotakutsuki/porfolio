import Image, { StaticImageData } from "next/image"
import { Badge } from "@/components/ui/badge"

interface Project {
    image: StaticImageData;
    desc: string[];
    link: string;
    name: string;
    badges: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
    const badgeColors = [
        "bg-[var(--chart-1)] text-[var(--background)]",
        "bg-[var(--chart-2)] text-[var(--background)]",
        "bg-[var(--chart-3)] text-[var(--background)]",
        "bg-[var(--chart-4)] text-[var(--background)]",
        "bg-[var(--chart-5)] text-[var(--background)]",
        "bg-[var(--muted)] text-[var(--foreground)]",
    ];

    return (
        <article className="rounded-xl m-4 relative" itemScope itemType="https://schema.org/CreativeWork">
            <div className="absolute h-full w-full md:max-w-[330px] max-w-[215px] left-0 z-1">
                <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt={`${project.name} project demonstration - ${project.badges.join(', ')}`}
                    title={`${project.name} - ${project.badges.join(', ')}`}
                />
            </div>

            <div className="absolute right-0 md:max-w-[320px] max-w-[215px] h-full flex flex-col px-4 md:px-10 space-y-4 overflow-y-auto overflow-x-clip py-6 md:py-10">
                <div className="whitespace-break-spaces text-left text-sm mt-8" itemProp="description">
                    {project.desc.map((desc, idx) => (
                        <span key={idx} className={`${idx % 2 && "font-bold"}`}>{desc}</span>
                    ))
                    }
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`Visit ${project.name} project`}
                >
                    <p className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-sm">
                        {project.link}
                    </p>
                </a>
                <div className="flex flex-row flex-wrap gap-1 w-full" role="list" aria-label={`Technologies used in ${project.name}`}>
                    {project.badges.map((badge, idx) => (
                        <Badge
                            key={idx}
                            className={`${badgeColors[idx % badgeColors.length]} border border-[var(--border)]`}
                            role="listitem"
                            itemProp="keywords"
                        >
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="absolute left-0 top-0 w-full z-2 h-10 md:h-12 bg-primary">
                <div className="flex justify-center items-center h-full text-primary-foreground">
                    <h2 itemProp="name" className="text-lg font-semibold">
                        {project.name}
                    </h2>
                </div>
            </div>
        </article>
    )
}