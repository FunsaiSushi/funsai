"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const ProjectModal = ({ project }) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[1px] flex justify-center items-center z-50"
      onClick={handleClose} // Close modal when clicking outside
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="max-w-6xl w-full relative aspect-video"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -bottom-12 lg:-top-16 right-2 border text-neutral-400 hover:text-[#FF0000] p-2 w-fit h-fit"
        >
          <IoMdClose size={20} />
        </button>

        <div className="flex flex-col lg:flex-row gap-10 p-4">
          <Image
            src={project.img}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-fit h-auto max-h-[400px] lg:max-h-[70vh] max-w-full lg:max-w-[720px] p-1 border"
          />
          <div>
            <h1 className="text-4xl">{project.fullName}</h1>
            <p className="text-lg">{project.description}</p>
            {/* Project Links */}
            <div className="mt-6 flex gap-4">
              <Link
                href={project.link}
                target="_blank"
                className="px-4 py-2 border hover:bg-[#FF0000] font-semibold"
              >
                Visit Website
              </Link>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border hover:bg-[#FF0000] font-semibold"
                >
                  View on GitHub
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
