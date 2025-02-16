"use client";

import { Source_Code_Pro } from "next/font/google";
import ProjectModal from "@/app/ui/ProjectModal";
import { usePathname } from "next/navigation";
import React from "react";
import { projectData } from "@/data/projectData";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const ProjectPage = () => {
  const pathname = usePathname();
  const projectName = pathname.split("/").pop();

  // Find the matching project
  const project = projectData.find(
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
