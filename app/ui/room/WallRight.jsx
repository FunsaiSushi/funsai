import React from "react";
import IronMan from "../IronMan";
import "./AnimatedText.css";

const WallRight = ({ onIronClick }) => {
  return (
    <div className="wall right">
      <div className="border lg:border-2 lg:m-2 my-2 w-full h-full flex justify-center items-center hover:bg-black">
        <div className="wall-content relative w-full h-full flex flex-col justify-center items-center">
          <div className="flex w-full py-2 justify-center animatedText">
            <span></span>
          </div>
          <button
            className="relative w-full h-80 sm:h-96"
            onClick={onIronClick}
          >
            <IronMan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallRight;
