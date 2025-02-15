import React from "react";
import IronMan from "../IronMan";

const WallRight = () => {
  return (
    <div className="wall right">
      <div className="border lg:m-2 my-2 w-full h-full flex justify-center items-center">
        <div className="wall-content relative">
          <div className="py-2 justify-center">hiFunsaiHere()</div>
          <div className="relative w-full h-64 sm:h-96">
            <IronMan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallRight;
