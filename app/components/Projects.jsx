import Image from "next/image";

import projectScript from "@/public/assets/scripts/project_script.json";

const Projects = () => {
    return (
        <>
            <div className="mt-16 flex justify-start md:w-1/2 text-2xl font-semibold text-gray-800">
                My Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start md:w-1/2 m-4">
                {projectScript.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative hover:scale-105 transition-transform duration-500">
                            <Image
                                src={project.img}
                                alt={`Project ${index + 1}`}
                                width={500}
                                height={300}
                                className="rounded-md"
                            />
                            <a
                                className="absolute bottom-2 right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-900 transition-colors duration-300"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="text-lg font-medium text-gray-700">
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
