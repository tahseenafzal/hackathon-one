import React from "react";
import event1 from "@/public/media/promotion/event1.webp";
import event2 from "@/public/media/promotion/event2.webp";
import event3 from "@/public/media/promotion/event3.webp";
import Image from "next/image";

const Promotions = () => {
  return (
    <div className="py-16 mx-4 lg:my-16 lg:mx-32">
      <div className="text-center flex flex-col gap-4 mb-8 font-bold">
        <span className="text-[12px] leading-[15px] tracking-widest text-[#0062f5]">
          PROMOTIONS
        </span>
        <h2 className="text-[32px] leading-10 text-[#212121]">
          Our Promotions Events
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div className="flex flex-col gap-3 ">
          <div className="bg-[#d6d6d8] flex items-center justify-center px-8 tracking-wider text-[#212121]">
            <div>
              <h3 className="text-[1.75rem] font-bold leading-[35px]">
                GET UP TO{" "}
                <span className="text-4xl leading-[45px] font-extrabold">
                  60%
                </span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image src={event1} alt="event1" />
          </div>
          <div className="bg-[#212121] pt-12 pb-8 px-8  text-[#ffffff] flex flex-col items-center justify-center">
            <h3 className="mb-[1rem] font-extrabold text-[2.25rem] leading-[45px] tracking-[0.03em]">
              GET 30% Off
            </h3>
            <p className="text-[0.875rem] leading-[18px] tracking-[0.03em]">
              USE PROMO CODE
            </p>
            <button className="font-bold text-[17px] leading-[21px] tracking-[0.25em] border-none bg-[#474747] py-[0.5rem] px-[2.5rem] mt-[5px] rounded-lg">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="flex gap-3 flex-col md:flex-row ">
          <div className="flex flex-col justify-between items-center pt-6 bg-[#efe1c7] flex-1 shrink-0">
            <div className="w-[100%] ml-9">
              <p>Flex Sweatshirt</p>
              <span>$100.00</span>
              <span className="font-semibold text-[18px] ml-[10px]">
                $75.00
              </span>
            </div>
            <Image src={event2} alt="event2 picture" />
          </div>
          <div className="flex flex-col justify-between items-center pt-6 bg-[#d7d7d9] flex-1 shrink-0">
            <div className="w-[100%] ml-9">
              <p>Flex Push Button Bomber</p>
              <span className="line-through">$225.00</span>
              <span className="font-semibold text-[18px] ml-[10px]">
                $190.00
              </span>
            </div>
            <Image src={event3} alt="event2 picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
