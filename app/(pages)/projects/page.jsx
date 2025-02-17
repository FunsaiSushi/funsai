import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";
import { projectData } from "@/data/projectData";

export const metadata = {
  title: "Funsai | Projects",
  description: "A list of the projects I have worked on.",
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto mb-6">
      <div className="flex gap-4 items-center">
        <Link
          href={"/"}
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
        >
          <MdHome size={20} />
        </Link>

        <h1 className="text-2xl py-4">My Projects</h1>
      </div>
      <div className="flex flex-col gap-8">
        {projectData.map((project) => (
          <div
            key={project.name}
            className="flex flex-col lg:flex-row justify-between w-full gap-4 border border-black hover:border-white p-4"
          >
            <div className="lg:w-1/2">
              <Image
                src={project.img}
                alt={project.fullName}
                width={1500}
                height={1500}
                className="w-fit lg:max-w-lg max-h-80 border p-1"
              />
            </div>
            <div className="flex flex-col gap-2 lg:max-w-sm xl:max-w-lg lg:w-1/2">
              <h2 className="text-2xl">{project.fullName}</h2>
              <p>{project.description}</p>
              <div className="mt-6 flex gap-4">
                <Link
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 border hover:bg-[#FF0000] hover:border-[#FF0000] font-semibold"
                >
                  Visit Website
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 border hover:bg-[#FF0000] font-semibold"
                  >
                    View on GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
