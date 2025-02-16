"use client";

import React, { useState } from "react";
import StarsCanvas from "./StarBackground";
import "./Bento.css";
import Floor from "./room/Floor";
import WallLeft from "./room/WallLeft";
import WallRight from "./room/WallRight";
import YouTubeModal from "./room/YoutubeModal";
import BackgroundAudio from "./BackgroundAudio";

// import IronMan from "./IronMan";

const Bento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleCubeClick = () => {
    setIsModalOpen(true);
    setIsMuted(true);
  };

  const handleProjectClick = () => {
    setIsProjectModalOpen(true);
  };

  return (
    <>
      <div className="relative w-full flex justify-center items-center lg:pt-64 text-base sm:text-2xl font-mono lg:font-semibold">
        {/* StarBackground as the background layer */}
        <StarsCanvas />

        <div className="room">
          <WallRight />

          <Floor onCubeClick={handleCubeClick} />

          <WallLeft onProjectClick={handleProjectClick} />
        </div>
      </div>
      <YouTubeModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsMuted(false); // ✅ Unmute audio when closing modal
        }}
      />
      <BackgroundAudio isMuted={isMuted} setIsMuted={setIsMuted} />
    </>
  );
};

export default Bento;
