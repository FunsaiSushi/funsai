import { Source_Code_Pro } from "next/font/google";
import React from "react";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const PagesLayout = ({ children, photo }) => {
  return (
    <div
      className={`container max-w-6xl mx-auto min-h-screen px-2 ${sourceCodePro.className}`}
    >
      {photo}
      {children}
    </div>
  );
};

export default PagesLayout;
