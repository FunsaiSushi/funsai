import React from "react";
import IronMan from "../IronMan";
import "./AnimatedText.css";

const WallRight = () => {
  return (
    <div className="wall right">
      <div className="border lg:m-2 my-2 w-full h-full flex justify-center items-center">
        <div className="wall-content relative w-full h-full flex flex-col justify-center items-center">
          <div className="flex w-full py-2 justify-center animatedText">
            <span></span>
          </div>
          <div className="relative w-full h-64 sm:h-96">
            <IronMan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallRight;
