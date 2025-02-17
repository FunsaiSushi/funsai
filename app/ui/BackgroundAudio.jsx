"use client";

import { useRef, useEffect } from "react";
import { MdOutlineVolumeUp, MdOutlineVolumeMute } from "react-icons/md";
import Equalizer from "./Equalizer";

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
        className="w-10 h-10 flex justify-center items-center text-neutral-500 hover:text-[#FF0000] lg:text-white cursor-pointer border"
      >
        {isMuted ? (
          <MdOutlineVolumeMute size={24} />
        ) : (
          <div class="equalizer">
            <span class="eq1"></span>
            <span class="eq2"></span>
            <span class="eq3"></span>
          </div>
        )}
      </button>
    </div>
  );
}
