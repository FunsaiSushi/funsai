import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedNewLogo from "../AnimatedNewLogo";

const projects = [
  {
    name: "boopclub",
    logo: "/boopclub-logo.svg",
  },
  {
    name: "storefren",
    logo: "/Storefren-icon.svg",
  },
  {
    name: "kreeshee",
    logo: "/kreeshee.png",
  },
  {
    name: "grassForGamers",
    logo: "/GrassforGamers.png",
  },
];

const WallLeft = () => {
  return (
    <div className="wall">
      <div className="my-2 w-full h-full">
        <div className="wall-content">
          {/* Header */}
          <div className="border p-4 flex w-full lg:justify-between justify-center items-center">
            <span>projects()</span>
            <Link
              href="/projects"
              className="hidden lg:flex hover:underline hover:underline-offset-8 hover:text-[#ff0000]"
            >
              seeAll()
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 w-full h-full text-base">
            {projects.map((project, index) => (
              <Link
                key={project.name}
                href={`/project/${project.name}`}
                className="flex flex-col gap-2 items-center justify-center p-4 border hover:bg-black hover:text-[#ff0000] hover:underline hover:underline-offset-8"
              >
                {index === 0 ? (
                  <AnimatedNewLogo size={45} />
                ) : (
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={200}
                    height={40}
                    className="object-cover w-14 h-14"
                  />
                )}
                <div className="text-sm sm:text-base">{project.name}()</div>
              </Link>
            ))}
          </div>

          {/* Mobile See All */}
          <Link
            href="/projects"
            className="w-full flex justify-center border py-4 lg:hidden hover:underline hover:underline-offset-8 hover:text-red-500"
          >
            seeAll()
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WallLeft;
