import React from "react";
import siteLogo from "@/public/media/site/Logo.webp";
import Image from "next/image";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 py-16 px-8  md:p-16 lg:px-32 lg:py-16">
        <div className=" lg:col-span-2 w-[100%] lg:w-[80%] flex flex-col gap-8 lg:justify-between">
          <Image className="w-[180px]" src={siteLogo} alt="logo" />
          <p className="text-[16px]">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-4">
            <div className="w-[44px] h-[45px] bg-[#f1f1f1] rounded-xl flex items-center justify-center">
              <RiTwitterFill size={20} />
            </div>
            <div className="w-[44px] h-[45px] bg-[#f1f1f1] rounded-xl flex items-center justify-center">
              <RiFacebookFill size={20} />
            </div>
            <div className="w-[44px] h-[45px] bg-[#f1f1f1] rounded-xl flex items-center justify-center">
              <RiLinkedinFill size={20} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h3 className="text-[19.2px] font-bold">Company</h3>
          <ul className="text-[16px]">
            <li className="mt-[15px]">About</li>
            <li className="mt-[15px]">Terms of Use</li>
            <li className="mt-[15px]">Privacy Policy</li>
            <li className="mt-[15px]">How it Works</li>
            <li className="mt-[15px]">Contact Us</li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h3 className="text-[19.2px] font-bold">Support</h3>
          <ul className="text-[16px]">
            <li className="mt-[15px]">Support Carrer</li>
            <li className="mt-[15px]">24h Service</li>
            <li className="mt-[15px]">Quick Chat</li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h3 className="text-[19.2px] font-bold">Contact</h3>
          <ul className="text-[16px]">
            <li className="mt-[15px]">Whatsapp</li>
            <li className="mt-[15px]">Support 24h</li>
          </ul>
        </div>
      </div>
      <div className="lg:mt-24 border border-t-[#666] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="mx-8 my-4 lg:mx-[128px] lg:my-[24px]">
            Copyright © 2022 Dine Market
          </p>
        </div>
        <div>
          <p className="mx-8 my-4 lg:mx-[128px] lg:my-[24px]">
            Design by: <span className="font-bold">IT Mate Pakistan</span>
          </p>
        </div>
        <div>
          <p className="mx-8 my-4 lg:mx-[128px] lg:my-[24px]">
            Code by: <span className="font-bold">Tehseen Afzal on github</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
