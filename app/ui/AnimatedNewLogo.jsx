"use client";

import { useEffect, useRef } from "react";

const AnimatedNewLogo = ({
  size = 40, // Default size
  className = "", // Tailwind or additional CSS classes
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    let hue = 0;

    const animateGradient = () => {
      if (svgRef.current) {
        hue = (hue + 1) % 360; // Increment hue (0 to 359)

        // Keep vibrant colors by tweaking saturation and lightness.
        const color1 = `hsl(${hue}, 100%, 40%)`; // Higher saturation, slightly reduced lightness.
        const color2 = `hsl(${(hue + 120) % 360}, 100%, 40%)`; // Match adjustments for harmony.

        const gradient = svgRef.current.querySelector("#newLogoGradient");
        if (gradient && gradient.children.length > 1) {
          gradient.children[0].setAttribute("stop-color", color1);
          gradient.children[1].setAttribute("stop-color", color2);
        }
      }
    };

    const interval = setInterval(animateGradient, 10); // Change gradient every 10ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="newLogoGradient" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%" stopColor="hsl(0, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(120, 100%, 50%)" />
        </linearGradient>
      </defs>
      <g clipPath="url(#a)">
        <rect width={200} height={200} fill="url(#newLogoGradient)" rx={60} />
        <path
          fill="#fff"
          d="M83.28 165.92H63.4V99.14c0-20.86 15.96-36.4 37.52-36.4 21.42 0 37.52 16.52 37.52 36.4 0 21.7-14.84 36.82-36.4 36.82-7 0-13.58-2.52-18.76-6.44v36.4Zm17.64-48.72c10.22 0 17.64-8.12 17.64-17.92 0-9.8-7.42-17.78-17.64-17.78s-17.64 7.98-17.64 17.78 7.42 17.92 17.64 17.92Z"
        />
        <path
          fill="#fff"
          d="M34.08 116.72v19.88h66.78c20.86 0 36.4-15.96 36.4-37.52 0-21.42-16.52-37.52-36.4-37.52-21.7 0-36.82 14.84-36.82 36.4 0 7 2.52 13.58 6.44 18.76h-36.4ZM82.8 99.08c0-10.22 8.12-17.64 17.92-17.64 9.8 0 17.78 7.42 17.78 17.64s-7.98 17.64-17.78 17.64S82.8 109.3 82.8 99.08Z"
        />
        <path
          stroke="#fff"
          strokeWidth={20}
          d="M99.816 156C131.195 156 159 130.033 159 98c0-34.327-27.805-58-59.184-58C68.437 40 43 65.968 43 98"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h200v200H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AnimatedNewLogo;
