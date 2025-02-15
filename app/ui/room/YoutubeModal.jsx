import React from "react";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const YouTubeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  const handleClose = () => {
    onClose(); // Close modal
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 videomodal"
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
          className="absolute -bottom-12 lg:-top-16 right-2 border text-neutral-400 hover:text-[#B41414] py-2 px-3 w-fit h-fit"
        >
          ✖
        </button>

        {/* Embed YouTube Video */}
        <div className="aspect-video">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/8KAbeRi1Q6A?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default YouTubeModal;
