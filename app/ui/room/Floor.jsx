"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { GrCube } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from "framer-motion";
import YouTubeModal from "./YoutubeModal";
import { useRouter } from "next/navigation";

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Floor = ({ onCubeClick, secondLayout }) => {
  const router = useRouter();
  return (
    <>
      <div className="floor">
        <div className="col-span-3 row-span-3">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square z-20">
            {/* about() */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className={`bg-black tile ${
                secondLayout
                  ? "col-start-1 row-start-1 col-span-1 row-span-2"
                  : "col-span-2 row-span-1"
              }`}
            >
              <Link
                href="/about"
                className={`${
                  secondLayout ? "blogtile" : ""
                } w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8 bg-black/50 backdrop-blur-sm`}
              >
                {"<About/>"}
              </Link>
            </motion.div>

            {/* blog() */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className={`${
                secondLayout
                  ? "col-start-2 row-start-1 col-span-2 row-span-1"
                  : "col-start-3 row-span-2"
              } tile cursor-pointer w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8 bg-black/50 backdrop-blur-sm`}
              onClick={() => router.push("/blog")}
            >
              <span className={secondLayout ? "" : "blogtile"}>
                {"<Blog/>"}
              </span>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className={`${
                secondLayout
                  ? "row-start-2 col-start-3 col-span-1 row-span-2 flex-col"
                  : "col-start-2 col-span-2 row-start-3"
              } border w-full h-full flex justify-center items-center gap-6 cursor-pointer hover:bg-black lg:min-w-32 bg-black/50 backdrop-blur-sm`}
            >
              <Link
                href="https://twitter.com/FunsaiSushi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000]"
              >
                <FaXTwitter className="icon" />
              </Link>
              <Link
                href="https://instagram.com/funsai.sushi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000]"
              >
                <IoLogoInstagram className="icon" />
              </Link>
              <Link
                href="https://github.com/FunsaiSushi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000]"
              >
                <FaGithub className="icon" />
              </Link>
            </motion.div>

            {/* gallery() */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className={`${
                secondLayout
                  ? "row-start-3 col-span-2 row-span-1"
                  : "col-span-1 row-start-2 row-span-2"
              } tile cursor-pointer w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8 bg-black/50 backdrop-blur-sm`}
              onClick={() => router.push("/gallery")}
            >
              <span className={secondLayout ? "" : "blogtile"}>
                {"<Gallery/>"}
              </span>
            </motion.div>

            {/* Cube */}
            <motion.button
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="relative w-full h-full col-start-2 row-start-2 tile flex justify-center items-center bg-black/50 backdrop-blur-sm"
              onClick={onCubeClick}
            >
              <GrCube className="icon cube" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Floor;
