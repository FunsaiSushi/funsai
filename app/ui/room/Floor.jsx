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

const Floor = ({ onCubeClick }) => {
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
              className="col-span-2 row-span-1 bg-black tile"
            >
              <Link
                href="/about"
                className="w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8"
              >
                about()
              </Link>
            </motion.div>

            {/* blog() */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="ccol-start-3 row-span-2 tile cursor-pointer w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8"
              onClick={() => router.push("/blog")}
            >
              <span className="blogtile">blog()</span>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="col-start-2 col-span-2 row-start-3 border w-full h-full flex justify-center items-center gap-6 cursor-pointer hover:bg-black"
            >
              <Link
                href="https://github.com/FunsaiSushi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B41414]"
              >
                <FaGithub className="icon" />
              </Link>
              <Link
                href="https://twitter.com/FunsaiSushi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B41414]"
              >
                <FaXTwitter className="icon" />
              </Link>
              <Link
                href="https://instagram.com/funsai.sushi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B41414]"
              >
                <IoLogoInstagram className="icon" />
              </Link>
            </motion.div>

            {/* gallery() */}
            <motion.div
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="col-span-1 row-start-2 row-span-2 tile cursor-pointer w-full h-full flex justify-center items-center hover:underline hover:underline-offset-8"
              onClick={() => router.push("/gallery")}
            >
              <span className="blogtile">gallery()</span>
            </motion.div>

            {/* Cube */}
            <motion.button
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 2, duration: 0.5 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full col-start-2 row-start-2 tile flex justify-center items-center"
              onClick={onCubeClick}
            >
              <GrCube className="icon" />
            </motion.button>

            {/* Modal */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Floor;
