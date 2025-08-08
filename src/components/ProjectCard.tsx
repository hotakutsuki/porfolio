import Image, { StaticImageData } from "next/image"
import { Badge } from "@/components/ui/badge"

interface Project {
    image: StaticImageData;
    desc: string;
    link: string;
    name: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="rounded-xl m-4">
            <div className="absolute h-full w-full md:max-w-[330px] max-w-[215px] left-0 z-1">
                <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt="Profile picture of Josue Ortiz"
                />
            </div>

            <div className="absolute right-0 md:max-w-[320px] max-w-[215px] mt-10 h-full flex flex-col justify-center items-start px-4 md:px-10 space-y-4">
                <div className="whitespace-normal text-left">
                    Lorem ipsum is a dummy or placeholder text commonly used Lorem ipsum is a dummy or placeholder text commonly used Lorem ipsum is a dummy or placeholder text commonly used
                    {project.desc}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <p className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        http://www.inkachess.com
                    </p>
                </a>
                <div className="flex flex-row space-x-1">
                    <Badge>
                        JavaScript
                    </Badge>
                    <Badge>
                        Dart
                    </Badge>
                    <Badge>
                        Flutter
                    </Badge>
                </div>
            </div>
            <div className="absolute left-0 top-0 w-full z-2 h-10 md:h-12 bg-card">
                <div className="flex justify-center items-center h-full">
                    <h2>
                        {project.name}
                    </h2>
                </div>
            </div>
        </div>
    )

    // return (
    //     <motion.button
    //         key={project.name}
    //         initial={{ width: 200, height: 230 }}
    //         whileHover={{ width: 460, height: 420 }}
    //         whileTap={{ scale: 0.9 }}
    //         onHoverStart={() => {
    //             setIsHover(true);
    //         }}
    //         onHoverEnd={() => {
    //             setIsHover(false);
    //         }}
    //         onClick={() => {
    //             <a href={project.link} target="_blank" rel="noopener noreferrer"></a>
    //         }}
    //         className="mx-2 snap-end"
    //     >
    //         <div className="relative size-full rounded-xl shadow-md overflow-hidden bg-muted">
    //             <div className="absolute h-full w-[250px]">
    //                 <Image
    //                     src={project.image}
    //                     fill
    //                     className="object-cover"
    //                     alt="Profile picture of Josue Ortiz"
    //                 />
    //             </div>
    //             {isHover && <motion.div
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ delay: 0.1 }}
    //                 className="absolute right-0 w-[350px] h-full flex flex-col justify-center items-start px-10 space-y-4">
    //                 <div className="whitespace-normal text-left">
    //                     Lorem ipsum is a dummy or placeholder text commonly used Lorem ipsum is a dummy or placeholder text commonly used Lorem ipsum is a dummy or placeholder text commonly used
    //                     {project.desc}
    //                 </div>
    //                 <a href={project.link} target="_blank" rel="noopener noreferrer">
    //                     <p className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
    //                         http://www.inkachess.com
    //                     </p>
    //                 </a>
    //                 <div className="flex flex-row space-x-1">
    //                     <Badge>
    //                         JavaScript
    //                     </Badge>
    //                     <Badge>
    //                         Dart
    //                     </Badge>
    //                     <Badge>
    //                         Flutter
    //                     </Badge>
    //                 </div>
    //             </motion.div>}
    //             <div className="absolute left-0 w-full">
    //                 <div className={`bg-card ${!isHover && "opacity-95"} w-full h-14`}>
    //                     <div className="flex justify-center items-center h-full z-10">
    //                         <h2>
    //                             {project.name}
    //                         </h2>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </motion.button>
    // )
}