import React from "react";
import { IoCube } from "react-icons/io5";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

const Floor = () => {
  return (
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
            className="w-full h-full flex justify-center items-center blogtile hover:underline hover:underline-offset-8"
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
          <span className="w-full h-full flex justify-center items-center blogtile hover:underline hover:underline-offset-8">
            gallery()
          </span>
        </Link>
        <button className="relative w-full h-full col-start-2 row-start-2 tile flex justify-center items-center">
          <IoCube className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Floor;
