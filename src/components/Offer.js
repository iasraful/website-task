/** @format */

import React from "react";
import bgPic from "../images/frame4.png";

export default function Offer() {
  return (
    <div className="">
      <div
        className="h-96 bg-no-repeat bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${bgPic})` }}
      >
        <div className="absolute">
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h2 className="text-5xl text-center font-semibold text-white">
              20% OFF
            </h2>
            <p className="text-center mt-6 text-lg text-white">
              And extra 50% off sale styles code FORCE20
            </p>
            <button className="mt-12 py-3 px-14 text-white border-solid border-2 border-white m-auto">
              VIEW ALL{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
