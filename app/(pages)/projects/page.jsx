import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";

const projects = [
  {
    name: "boopclub",
    fullName: "Boopclub",
    img: "/boopclub.png",
    description: "Boopclub is the best social media platform!",
    link: "https://boopclub.vercel.app",
  },
  {
    name: "kreeshee",
    fullName: "Kreeshee",
    img: "/kreeshee2.png",
    description:
      "Kreeshee is the biggest online marketplace for fresh produce!",
    link: "https://kreeshee.vercel.app",
    github: "https://github.com/FunsaiSushi/kreeshee",
  },
  {
    name: "storefren",
    fullName: "Storefren",
    img: "/storefren.png",
    description: "Storefren is your friendly neighborhood store assistant!",
    link: "https://storefren.vercel.app",
  },
  {
    name: "grassforgamers",
    fullName: "Grass For Gamers",
    img: "/gfg2.png",
    description: "Grass For Gamers is a silly unfinished project of sorts!",
    link: "https://grassforgamers.vercel.app",
    github: "https://github.com/FunsaiSushi/grassforgamers",
  },
  {
    name: "cs2bd",
    fullName: "CS2BD",
    img: "/cs2bd.png",
    description:
      "CS2BD is the ultimate platform for Counter Strike 2 players in Bangladesh!",
    link: "https://cs2bd.vercel.app",
  },
];

const ProjectsPage = () => {
  return (
    <div className="mb-10">
      <div className="flex gap-4 items-center">
        <Link
          href={"/"}
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
        >
          <MdHome size={20} />
        </Link>

        <h1 className="text-4xl py-4">My Projects</h1>
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col lg:flex-row w-full gap-4 border border-black hover:border-white p-4"
          >
            <div className="w-1/2">
              <Image
                src={project.img}
                alt={project.fullName}
                width={1500}
                height={1500}
                className="object-contain w-fit lg:max-w-lg max-h-80 border p-1"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-lg w-1/2">
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
