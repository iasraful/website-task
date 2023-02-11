/** @format */

import React from "react";
import collection1 from "../images/collection1.png";
import collection2 from "../images/collection2.png";
import collection3 from "../images/collection3.png";

export default function Collection() {
  return (
    <div className="bg-gray-100 p-24">
      <p className="mb-12 text-lg">OUR COLLECTION</p>
      <div className="flex gap-7 flex-1">
        <div className="">
          <img className="" src={collection1} alt="TableImg" />
          <p className="text-center text-xl tracking-wide">Flower</p>
          <p className="text-center text-base tracking-wide mt-3">
            Lorem ipsum dolor ipsum dolor amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className="">
          <img className="" src={collection2} alt="TableImg" />
          <p className="text-center text-xl tracking-wide mt-3">Flower</p>
          <p className="text-center text-base tracking-wide">
            Lorem ipsum dolor ipsum dolor amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className="">
          <img className="" src={collection3} alt="TableImg" />
          <p className="text-center text-xl tracking-wide mt-3">Flower</p>
          <p className="text-center text-base tracking-wide">
            Lorem ipsum dolor ipsum dolor amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
      </div>
    </div>
  );
}
