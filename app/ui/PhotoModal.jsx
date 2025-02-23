"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const PhotoModal = ({ imageSrc, placeName }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-[2px] z-50"
      onClick={handleClose} // Closes modal when clicking outside
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative max-w-6xl w-fit p-4 flex justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="absolute -bottom-12 lg:-top-12 flex justify-between w-full gap-2 px-4">
          <h2>{placeName}</h2> {/* Display place name here */}
          <button
            onClick={handleClose}
            className=" text-neutral-400 hover:text-[#FF0000] p-2 border w-fit h-fit"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Image */}
        <Image
          src={imageSrc}
          alt="Photo"
          width={800}
          height={600}
          className="max-w-full w-auto h-auto object-contain max-h-[80vh]"
        />
      </motion.div>
    </div>
  );
};

export default PhotoModal;
