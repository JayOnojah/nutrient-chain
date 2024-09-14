import React from "react";

import Image from "next/image";
import logo from "@/public/svg/logo.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between fixed px-6 xl:px-12 top-5 z-15 w-full mx-auto">
      <Image src={logo} alt="" className="w-20 sm:w-[unset]" />

      <div className="flex items-center gap-6 xl:gap-[80px]">
        <div className="text-xs text-white">Contact</div>
        <button className="py-[6px] text-xs px-3 md:px-[22px] bg-[#74B700] rounded-full">
          Join waitlist
        </button>
      </div>
    </div>
  );
};

export default Footer;
