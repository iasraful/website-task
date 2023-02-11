/** @format */

import React from "react";
import logo from "../images/logo.png";
import headerImg from "../images/headerImg.png";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Heading() {
  return (
    <div>
      <div className="h-14 bg-stone-300">
        <p className=" text-center p-4 tracking-wide text-base text-zinc-800">
          Use this banner to inform your users of something important.
        </p>
      </div>

      <div className="flex justify-around items-center bg-gray-100 h-24">
        <nav className="-ml-52">
          <ul className="flex gap-6 ">
            <li className="p-3">HOME</li>
            <li className="p-3">SHOP</li>
            <li className="p-3">ABOUT US</li>
            <li className="p-3">CONTACT US</li>
          </ul>
        </nav>
        <img className="h-14" src={logo} alt="logo" />

        <div className="flex gap-4">
          <IoIosSearch className="h-5 w-5" />
          <BsPerson className="h-5 w-5" />
          <AiOutlineShoppingCart className="h-5 w-5" />
        </div>
      </div>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat relative flex items-end"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="max-w-lg m-24 absolute">
          <h1 className="text-4xl text-slate-50 leading-10 tracking-tight">
            Lorem Ipsum is simply <br /> dummy text of the printing
          </h1>
          <p className="text-slate-200 mt-6">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <button className="mt-12 py-3 px-14 bg-stone-400 text-zinc-800">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
