"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { MdHome, MdOutlineFastForward } from "react-icons/md";

const images = ["/about/funsai.jpg", "/about/me.jpeg", "/about/sushi.jpeg"];

const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);

  const [displayText, setDisplayText] = useState(""); // State for typewriter effect
  const [typingComplete, setTypingComplete] = useState(false); // State to track typing completion

  const fullTextArray = [
    "Hi! I'm Funsai, sushipop (dad of Sushi the bun 🐇).",
    "I write spells with my code 🪄",
  ];

  const intervalRef = useRef(null); // Ref to store interval ID

  // Function to create typewriter effect
  const typeWriter = (textArray, index, arrayIndex) => {
    if (arrayIndex < textArray.length) {
      const currentText = textArray[arrayIndex];
      if (index < currentText.length) {
        setDisplayText((prev) => prev + currentText[index]);
        intervalRef.current = setTimeout(
          () => typeWriter(textArray, index + 1, arrayIndex),
          60
        ); // Adjusted delay for slower typing speed
      } else {
        // Add line break and go to the next text part
        setDisplayText((prev) => prev + "\n"); // Adds a newline
        setTimeout(() => typeWriter(textArray, 0, arrayIndex + 1), 60); // Start typing the next text
      }
    } else {
      setTypingComplete(true); // Set typingComplete to true when typing is done
    }
  };

  // Function to skip typewriting and show full text
  const skipTypewriter = () => {
    clearTimeout(intervalRef.current); // Stop the typewriter
    setDisplayText(fullTextArray.join("\n")); // Immediately set the full text
    setTypingComplete(true); // Mark typing as complete
  };

  useEffect(() => {
    let interval;

    if (isHovered) {
      let index = 0;
      interval = setInterval(() => {
        setFade(true); // Start fading out
        setTimeout(() => {
          index = (index + 1) % images.length;
          setCurrentImage(images[index]);
          setFade(false); // Fade back in after change
        }, 500); // Delay image change to match fade duration
      }, 2000);
    } else {
      setCurrentImage(images[0]); // Reset to default image
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    setDisplayText(""); // Clear display text when condition changes
    setTypingComplete(false); // Reset typingComplete before starting
    typeWriter(fullTextArray, 0, 0); // Start typewriter effect

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 max-w-xl mx-auto">
      <div className="w-full pl-2 flex justify-between items-end">
        {/* ✅ Keep the border outside the fading effect */}
        <div className="relative w-32 h-32 border p-1">
          <Image
            src={currentImage}
            alt="About"
            width={1000}
            height={1000}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={skipTypewriter}
            className={`p-2 border hover:border-[#FF0000] hover:text-[#FF0000] ${
              typingComplete ? "hidden" : ""
            }`}
          >
            <MdOutlineFastForward size={24} />
          </button>
          <button
            className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
            onClick={() => window.history.back()}
          >
            <MdHome size={24} />
          </button>
        </div>
      </div>
      <div className="w-full h-44">
        <pre className="z-10 text-base w-full whitespace-pre-wrap">
          {displayText}
        </pre>
      </div>
    </div>
  );
};

export default AboutPage;
