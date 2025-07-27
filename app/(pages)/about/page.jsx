import About from "./About";
import React from "react";
import VertexBackground from "../../ui/VertexBackground";

export const metadata = {
  title: "Funsai | About",
  description: "About Funsai.",
};

const AboutPage = () => {
  return (
    <div>
      <About />
      <VertexBackground className="absolute top-0 left-0 w-full h-full z-[-1]" />
    </div>
  );
};

export default AboutPage;
