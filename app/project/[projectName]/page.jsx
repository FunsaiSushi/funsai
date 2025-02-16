"use client";

import { Source_Code_Pro } from "next/font/google";
import ProjectModal from "@/app/ui/ProjectModal";
import { usePathname } from "next/navigation";
import React from "react";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const projects = [
  {
    name: "boopclub",
    fullName: "Boopclub",
    img: "/boopclub.png",
    description: "Boopclub is the best social media platform!",
    link: "https://boopclub.vercel.app",
  },
  {
    name: "storefren",
    fullName: "Storefren",
    img: "/storefren.png",
    description: "Storefren is your friendly neighborhood store assistant!",
    link: "https://storefren.vercel.app",
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
    name: "grassforgamers",
    fullName: "Grass For Gamers",
    img: "/gfg2.png",
    description: "Grass For Gamers is a silly unfinished project!",
    link: "https://grassforgamers.vercel.app",
    github: "https://github.com/FunsaiSushi/grassforgamers",
  },
];

const ProjectPage = () => {
  const pathname = usePathname();
  const projectName = pathname.split("/").pop();

  // Find the matching project
  const project = projects.find(
    (p) => p.name.toLowerCase() === projectName?.toLowerCase()
  );

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <div
      className={`fixed z-50 flex flex-col items-center justify-center min-h-screen p-6 ${sourceCodePro.className}`}
    >
      <ProjectModal project={project} />
    </div>
  );
};

export default ProjectPage;
