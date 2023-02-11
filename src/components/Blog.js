/** @format */

import React from "react";
import blogImg from "../images/blogL.png";
import blogImg1 from "../images/blogSm1.png";
import blogImg2 from "../images/blogSm2.png";
import blogImg3 from "../images/blogSm3.png";

export default function Blog() {
  return (
    <div className="py-24 px-28">
      <div>
        <h3 className="mb-12 text-center text-2xl text-slate-800">OUR BLOG</h3>
        <div className="flex gap-6">
          <div className="">
            <img src={blogImg} alt="blogImage" />{" "}
            <p className="text-base text-slate-800 tracking-wide">
              {" "}
              16 May, 2022
            </p>
            <p className="text-slate-800 text-lg font-semibold tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="border-solid border border-gray-300"></div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <img src={blogImg1} alt="Flower Blog" />
              <div>
                {" "}
                <p className="text-base text-slate-800 tracking-wide">
                  {" "}
                  16 May, 2022
                </p>
                <p className="text-slate-800 text-lg font-semibold tracking-wide">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img src={blogImg2} alt="Flower Blog" />
              <div>
                {" "}
                <p className="text-base text-slate-800 tracking-wide">
                  {" "}
                  16 May, 2022
                </p>
                <p className="text-slate-800 text-lg font-semibold tracking-wide">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img src={blogImg3} alt="Flower Blog" />
              <div>
                {" "}
                <p className="text-base text-slate-800 tracking-wide">
                  {" "}
                  16 May, 2022
                </p>
                <p className="text-slate-800 text-lg font-semibold tracking-wide">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="py-3 px-14 text-slate-800 border-solid border border-slate-800 m-auto flex items-center mt-16">
        VIEW ALL BLOG
      </button>
    </div>
  );
}
