import React from "react";
import event1 from "@/public/media/promotion/event1.webp";
import event2 from "@/public/media/promotion/event2.webp";
import event3 from "@/public/media/promotion/event3.webp";
import Image from "next/image";

const Promotions = () => {
  return (
    <div className="py-16 px-32">
      <div className="text-center flex flex-col gap-4 mb-8 font-bold">
        <span className="text-[12px] leading-[15px] tracking-widest text-[#0062f5]">
          PROMOTIONS
        </span>
        <h2 className="text-[32px] leading-10 text-[#212121]">
          Our Promotions Events
        </h2>
      </div>

      <div className="flex">
        <div className="bg-[#d6d6d8] flex justify-between items-center px-8 tracking-wider text-[#212121]">
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
      </div>
      <div></div>
    </div>
  );
};

export default Promotions;
