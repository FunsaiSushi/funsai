"use client";

import { useRef, useEffect } from "react";
import { MdOutlineVolumeUp, MdOutlineVolumeMute } from "react-icons/md";

export default function BackgroundAudio({ isMuted, setIsMuted }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 1; // Dynamically set volume
    }
  }, [isMuted]); // Runs whenever `isMuted` changes

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      if (audioRef.current) {
        audioRef.current.muted = newMutedState; // Ensure mute state updates
        if (!newMutedState) {
          audioRef.current
            .play()
            .catch((e) => console.warn("Playback error:", e));
        }
      }
      return newMutedState;
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop>
        <source src="/stay-by-Hans.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={toggleMute}
        className="p-2 text-neutral-500 hover:text-[#B41414] lg:text-white cursor-pointer border"
      >
        {isMuted ? (
          <MdOutlineVolumeMute size={24} />
        ) : (
          <MdOutlineVolumeUp size={24} />
        )}
      </button>
    </div>
  );
}
