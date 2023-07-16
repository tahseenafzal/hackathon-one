import React from "react";
import heroImage from "@/public/media/site/header.webp";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import feature1 from "@/public/media/bands/Featured1.webp";
import feature2 from "@/public/media/bands/Featured2.webp";
import feature3 from "@/public/media/bands/Featured3.webp";
import feature4 from "@/public/media/bands/Featured4.webp";

const Hero = () => {
  return (
    <div className="flex gap-16 justify-between flex-1 my-16 mx-32 relative">
      <div className="flex flex-col gap-10">
        <span className="flex justify-center items-center font-semibold w-[120px] h-[40px] text-[#0000ff] bg-[#e1edff] rounded-md">
          Sale 70%
        </span>
        <h1 className="text-[56px] font-bold text-[#212121] leading-[55px] tracking-[0.03em]">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-6 text-[#666] w-[70%]">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="w-[35%] text-[1rem] p-4 leading-[18px] font-semibold bg-[#212121] text-[#fff] flex justify-center items-center gap-2 ">
          <FiShoppingCart /> Start Shopping
        </button>
        <div className="grid grid-cols-4 gap-4">
          <Image src={feature1} alt="brand1" />
          <Image src={feature2} alt="brand2" />
          <Image src={feature3} alt="brand3" />
          <Image src={feature4} alt="brand4" />
        </div>
      </div>
      <div className="flex-1">
        <div className=" bg-[#ffece3] rounded-full w-[600px] h-[600px]">
          <Image src={heroImage} alt="Hero" className="absolute top-[-5%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
