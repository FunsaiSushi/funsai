import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedNewLogo from "../AnimatedNewLogo";

const projects = [
  {
    name: "BoopClub",
    logo: "/projects/boopclub-logo.svg",
  },
  {
    name: "Kreeshee",
    logo: "/projects/kreeshee.png",
  },
  {
    name: "Refun",
    logo: "/projects/refun.png",
  },
  {
    name: "Storefren",
    logo: "/projects/Storefren-icon.svg",
  },
];

const WallLeft = () => {
  return (
    <div className="wall">
      <div className="my-2 w-full h-full">
        <div className="wall-content">
          {/* Header */}
          <div className="border p-4 flex w-full lg:justify-between justify-center items-center">
            <span>{"<Projects/>"}</span>
            <Link
              href="/projects"
              className="hidden lg:flex hover:underline hover:underline-offset-8 hover:text-[#ff0000]"
            >
              {"<SeeAll/>"}
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 w-full h-full text-base border-x border-b">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={`/project/${project.name}`}
                className="flex flex-col gap-2 items-center justify-center p-4 hover:bg-black hover:text-[#ff0000] hover:underline hover:underline-offset-8 bg-black/50 backdrop-blur-sm"
              >
                {index === 0 ? (
                  <AnimatedNewLogo size={50} />
                ) : (
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={200}
                    height={40}
                    className="object-cover w-12 h-12"
                  />
                )}
                <div className="text-sm sm:text-base">{`<${project.name}/>`}</div>
              </Link>
            ))}
          </div>

          {/* Mobile See All */}
          <Link
            href="/projects"
            className="w-full flex justify-center border py-4 lg:hidden hover:underline hover:underline-offset-8 hover:text-red-500"
          >
            {"<SeeAll/>"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WallLeft;
