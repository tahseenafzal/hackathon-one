import React from "react";
import siteLogo from "@/public/media/site/Logo.webp";
import Image from "next/image";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div>
          <Image className="w-[180px]" src={siteLogo} alt="logo" />
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div>
            
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
