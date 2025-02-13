import React from "react";
import StarsCanvas from "./StarBackground";
import "./Bento.css";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import Image from "next/image";
import AnimatedNewLogo from "./AnimatedNewLogo";
import Link from "next/link";
import IronMan from "./IronMan";

// import IronMan from "./IronMan";

const Bento = () => {
  return (
    <div className="relative w-full flex justify-center items-center pt-64">
      {/* StarBackground as the background layer */}
      <div>
        <StarsCanvas />
      </div>

      <div className="room">
        <div className="wall">
          <div className="bg-gradient-to-tr from-amber-400 to-amber-600 my-2 w-full h-full rounded-xl">
            <div className="wall-content ">
              <h2 className="text-2xl p-4">projects()</h2>
              <div className="flex flex-col gap-2 justify-start items-start h-full">
                <div className="flex gap-2">
                  <Link
                    href="https://boopclub.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 items-center rounded-2xl p-2 bg-[#e2b875] hover:bg-amber-300 transition-colors duration-300 ease-in-out"
                  >
                    <AnimatedNewLogo size={45} />
                    <div className="text-lg">boopclub()</div>
                  </Link>
                  <Link
                    href="https://kreeshee.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 items-center p-2 rounded-xl bg-[#e2b875] hover:bg-amber-300 transition-colors duration-300 ease-in-out"
                  >
                    <Image
                      src="/Storefren-icon.svg"
                      alt=""
                      width={200}
                      height={40}
                      className="object-cover w-11 h-11"
                    />
                    <div className="text-lg">storefren()</div>
                  </Link>
                </div>

                <Link
                  href="https://kreeshee.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-2 w-full rounded-xl bg-[#e2b875] hover:bg-amber-300 transition-colors duration-300 ease-in-out"
                >
                  <Image
                    src="/Kreeshee-logo.svg"
                    alt=""
                    width={200}
                    height={40}
                    className="object-cover w-fit h-10"
                  />
                </Link>

                <Link
                  href="https://kreeshee.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center p-2 rounded-xl bg-[#e2b875] hover:bg-amber-300 transition-colors duration-300 ease-in-out"
                >
                  <Image
                    src="/GrassforGamers.png"
                    alt=""
                    width={200}
                    height={40}
                    className="object-cover w-10 h-10"
                  />
                  <div className="text-xl">grassForGamers()</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="floor">
          <div className="col-span-3 row-span-3">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square z-20">
              <div className=" col-span-2 row-span-1 bg-gradient-to-l from-[#e2b875] to-[#deccaf] tile  drop-shadow-[-4px_4px_0px_#FBAA24]">
                <div className="w-full h-full flex justify-center items-center text-4xl  drop-shadow-[-4px_4px_0px_#FBAA24]">
                  about()
                </div>
              </div>
              <div className=" col-start-3 row-span-2 bg-gradient-to-l from-[#c4964c] to-[#e2b875] tile  drop-shadow-[-4px_4px_0px_#FBAA24]">
                <Link
                  href="/blog"
                  className="w-full h-full flex justify-center items-center text-4xl blogtile"
                >
                  blog()
                </Link>
              </div>
              <div className="col-start-2 col-span-2 row-start-3 bg-gradient-to-l from-[#c4964c] to-[#deccaf] tile hover:from-[#e2b875] hover:to-[#deccaf]">
                <div className="w-full h-full flex justify-center items-center text-5xl gap-2  drop-shadow-[-4px_4px_0px_#FBAA24]">
                  {/* <FaSquareFacebook /> */}
                  <FaSquareGithub />
                  <FaSquareInstagram />
                  <FaSquareXTwitter />
                </div>
              </div>
              <div className="col-span-1 row-start-2 row-span-2 bg-[#deccaf] tile ">
                <div className="w-full h-full flex justify-center items-center text-4xl blogtile ">
                  gallery()
                </div>
              </div>
              <div className=" relative p-2 col-start-2 row-start-2 bg-gradient-to-l from-[#e2b875] to-[#deccaf] tile"></div>
            </div>
          </div>
        </div>
        <div className="wall right">
          <div className="bg-amber-600 m-2 w-full h-full rounded-xl flex justify-center items-center">
            <div className="wall-content">
              <div className="py-2 text-2xl justify-center ">
                hiFunsaiHere()
              </div>
              {/* <div className="flex justify-end">
                <div className="text-xl space-y-2">
                  <div className="flex gap-2 items-center bg-[#e2b875] hover:bg-amber-300 transition-colors duration-300 ease-in-out p-2 rounded-xl">
                    <FaWhatsapp size={30} />
                    <span>whatsapp()</span>
                  </div>
                  <div className="flex gap-2 items-center bg-[#e2b875] hover:bg-amber-300 transition-colors duration-300 ease-in-out p-2 rounded-xl">
                    <IoMail size={30} />
                    <span>email()</span>
                  </div>
                </div>
              </div>{" "} */}

              <IronMan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
