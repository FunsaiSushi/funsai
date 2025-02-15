import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedNewLogo from "../AnimatedNewLogo";

const WallLeft = () => {
  return (
    <div className="wall">
      <div className="my-2 w-full h-full">
        <div className="wall-content ">
          <div className="border p-4 flex w-full lg:justify-between justify-center items-center">
            <span>projects()</span>
            <Link
              href={"/projects"}
              className="hidden lg:flex hover:underline hover:underline-offset-8 hover:text-red-500"
            >
              seeAll()
            </Link>
          </div>
          <div className="flex flex-col w-full h-full text-base">
            <div className="flex w-full">
              <Link
                href="https://boopclub.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center p-4 border w-full hover:bg-black hover:text-[#B41414] hover:underline hover:underline-offset-8"
              >
                <AnimatedNewLogo size={45} />
                <div>boopclub()</div>
              </Link>
              <Link
                href="https://kreeshee.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center p-4 w-full border hover:bg-black hover:text-[#B41414] hover:underline hover:underline-offset-8"
              >
                <Image
                  src="/Storefren-icon.svg"
                  alt=""
                  width={200}
                  height={40}
                  className="object-cover w-11 h-11"
                />
                <div>storefren()</div>
              </Link>
            </div>

            <div className="flex w-full">
              <Link
                href="https://kreeshee.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-full border hover:bg-black hover:text-[#B41414] hover:underline hover:underline-offset-8"
              >
                <Image
                  src="/Kreeshee-logo.svg"
                  alt=""
                  width={200}
                  height={40}
                  className="object-cover w-fit h-10 p-1"
                />
              </Link>
              <Link
                href="https://kreeshee.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center justify-center py-4 w-full hover:bg-black border hover:text-[#B41414] hover:underline hover:underline-offset-8"
              >
                <Image
                  src="/GrassforGamers.png"
                  alt=""
                  width={200}
                  height={40}
                  className="object-cover w-14 h-14"
                />
                <div className="text-sm sm:text-base">grassForGamers()</div>
              </Link>
            </div>
          </div>
          <Link
            href={"/projects"}
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
