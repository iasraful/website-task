/** @format */

import React from "react";
import logo from "../images/logo.png";
import paymentLogo from "../images/footerBottom.png";

import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-stone-300 px-24 pt-24">
      <div className="flex ">
        <div className="basis-1/3">
          <img src={logo} alt="Logo" />
          <p className="text-base text-slate-800 tracking-wide mt-14">
            By completing this form you're signing
            <br />
            up to receive our emails and can
            <br />
            unsubscribe at any time
          </p>
        </div>
        {/* 2nd */}
        <div className="basis-1/3">
          <div className="flex gap-16">
            <div className="">
              <h4 className="text-base font-semibold text-slate-800 tracking-wide mb-2">
                MENU
              </h4>
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>Home</li>
                  <li>Gift Card</li>
                  <li>Seasonal</li>
                  <li>Kid & Nursery</li>
                  <li>Pet</li>
                  <li>Git Repo</li>
                </ul>
              </nav>
            </div>
            <div className="basis-1/3">
              <h4 className="text-base font-semibold text-slate-800 tracking-wide mb-2">
                Coustomer Care
              </h4>
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>Contact Us</li>
                  <li>Shipping Policy</li>
                  <li>Returns Policy</li>
                  <li>Privet Policy</li>
                </ul>
              </nav>
            </div>
            <div className="">
              <h4 className="text-base font-semibold text-slate-800 tracking-wide mb-2">
                About Us
              </h4>
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>Our Story</li>
                  <li>Term & Service</li>
                  <li>Articles</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="ml-16">
          <h3 className="text-base font-semibold text-slate-800 tracking-wide mb-6">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p className="mb-6">
            Signup for our newsletter to stay up to date on sales and events.
          </p>
          <div className="">
            <input
              className="border border-solid border-slate-800 h-11 py-3 px-5"
              placeholder="Email"
              type="email"
            />
            <button className="px-9 py-3 text-white bg-black">Join</button>
          </div>
          <p className="text-sm text-slate-800 mt-4">
            By completing this form you're signing up to receive our emails and
            can
            <br />
            unsubscribe at any time
          </p>
        </div>
      </div>
      <div className="mr-0 flex justify-end">
        <button className="py-3 px-14 text-slate-800 border-solid border border-slate-800 flex ">
          United States USD $<RiArrowDropDownLine />
        </button>
      </div>
      <div className="flex justify-between  mt-6">
        <div className="flex gap-5">
          <FaFacebookF />
          <BsTwitter />
          <AiFillInstagram />
        </div>
        <img src={paymentLogo} alt="" />
      </div>
      <div className="border stroke-slate-900 my-2"></div>
      <p className="text-base text-center p-4">
        © Copyright 2022 by Cole & Son. All rights reserved.
      </p>
    </div>
  );
}
