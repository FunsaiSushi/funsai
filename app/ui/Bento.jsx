import React from "react";
import StarsCanvas from "./StarBackground";
import "./Bento.css";
import {
  FaGithub,
  FaInstagram,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoCube, IoLogoInstagram, IoMail } from "react-icons/io5";

import Image from "next/image";
import AnimatedNewLogo from "./AnimatedNewLogo";
import Link from "next/link";
import IronMan from "./IronMan";

// import IronMan from "./IronMan";

const Bento = () => {
  return (
    <div className="relative w-full flex justify-center items-center lg:pt-64 text-base sm:text-2xl font-semibold">
      {/* StarBackground as the background layer */}
      <StarsCanvas />

      <div className="room">
        <div className="wall right">
          <div className="border lg:m-2 my-2 w-full h-full flex justify-center items-center">
            <div className="wall-content relative">
              <div className="py-2 justify-center ">hiFunsaiHere()</div>
              <div className="relative w-full h-64 sm:h-96">
                <IronMan />
              </div>
            </div>
          </div>
        </div>

        <div className="floor">
          <div className="col-span-3 row-span-3">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square z-20">
              <div className=" col-span-2 row-span-1 bg-black tile">
                <Link
                  href="/about"
                  className="w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8"
                >
                  about()
                </Link>
              </div>
              <div className=" col-start-3 row-span-2 bg-black border tile">
                <Link
                  href="/blog"
                  className="w-full h-full flex justify-center items-center blogtile  hover:underline hover:underline-offset-8"
                >
                  blog()
                </Link>
              </div>
              <div className="col-start-2 col-span-2 row-start-3 bg-black border w-full h-full flex justify-center items-center gap-6 cursor-pointer">
                <Link
                  href="https://github.com/FunsaiSushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-600"
                >
                  <FaGithub className="icon" />
                </Link>
                <Link
                  href="https://twitter.com/FunsaiSushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-600"
                >
                  <FaXTwitter className="icon" />
                </Link>
                <Link
                  href="https://instagram.com/funsai.sushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-600"
                >
                  <IoLogoInstagram className="icon" />
                </Link>
              </div>
              <Link
                href="/gallery"
                className="col-span-1 row-start-2 row-span-2 tile "
              >
                <span
                  href="/gallery"
                  className="w-full h-full flex justify-center items-center blogtile hover:underline hover:underline-offset-8"
                >
                  gallery()
                </span>
              </Link>
              <button className="relative w-full h-full col-start-2 row-start-2 tile flex justify-center items-center">
                <IoCube className="icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="wall mb-10">
          <div className="border my-2 w-full h-full">
            <div className="wall-content ">
              <div className="p-4 flex w-full lg:justify-between justify-center items-center">
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
                    className="flex flex-col gap-2 items-center p-4 border-y border-r w-full hover:bg-black"
                  >
                    <AnimatedNewLogo size={45} />
                    <div>boopclub()</div>
                  </Link>
                  <Link
                    href="https://kreeshee.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 items-center p-4 w-full border-y hover:bg-black"
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
                    className="flex justify-center items-center w-full border-r hover:bg-black"
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
                    className="flex flex-col gap-2 items-center justify-center py-4 w-full hover:bg-black"
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
                className="w-full flex justify-center border-t py-4 lg:hidden"
              >
                seeAll()
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
