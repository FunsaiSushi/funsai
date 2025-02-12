import React from "react";
import StarsCanvas from "./StarBackground";
import "./Bento.css";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import NewLogo from "./NewLogo";
import Image from "next/image";
import AnimatedNewLogo from "./AnimatedNewLogo";
import Link from "next/link";

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
              <div className="flex flex-col gap-4 justify-center items-center h-full">
                <Link
                  href="https://boopclub.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center bg-black rounded-2xl text-white pr-2 hover:bg-gray-900 border-2 border-black hover:border-blue-900"
                >
                  <AnimatedNewLogo size={60} />
                  <span className="text-2xl">boopclub()</span>
                </Link>

                <Link
                  href="https://kreeshee.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-green-900 px-2 py-1 rounded-xl hover:bg-emerald-600 border-2 border-green-900 hover:border-blue-900"
                >
                  <Image
                    src="/Kreeshee-logo.svg"
                    alt=""
                    width={200}
                    height={40}
                    className="object-cover w-full h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="floor">
          <div className="col-span-3 row-span-3">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square z-20">
              <div className=" col-span-2 row-span-1 bg-[#deccaf] tile">
                <div className="w-full h-full flex justify-center items-center text-4xl">
                  about()
                </div>
              </div>
              <div className=" col-start-3 row-span-2 bg-[#deccaf] tile">
                <div className="w-full h-full flex justify-center items-center text-4xl blogtile">
                  blog()
                </div>
              </div>
              <div className="col-start-2 col-span-2 row-start-3 bg-[#deccaf] tile">
                <div className="w-full h-full flex justify-center items-center text-5xl gap-2">
                  {/* <FaSquareFacebook /> */}
                  <FaSquareGithub />
                  <FaSquareInstagram />
                  <FaSquareXTwitter />
                </div>
              </div>
              <div className="col-span-1 row-start-2 row-span-2 bg-[#deccaf] tile">
                <div className="w-full h-full flex justify-center items-center text-4xl blogtile">
                  gallery()
                </div>
              </div>
              <div className=" relative p-2 col-start-2 row-start-2 bg-[#deccaf] tile">
                {/* <IronMan /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="wall right">
          <div className="bg-amber-600 m-2 w-full h-full rounded-xl flex justify-center items-center">
            <div className="flex wall-content">
              <div>
                <h2>contact()</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
