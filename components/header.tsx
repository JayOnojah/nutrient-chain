import React from "react";

import Image from "next/image";
import logo from "@/public/svg/logo.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between fixed px-6 xl:px-12 top-5 z-10 w-full mx-auto">
      <Image src={logo} alt="" className="w-20 sm:w-[unset]" />

      <div className="flex items-center gap-4 xl:gap-[40px]">
        <div className="text-xs lg:text-[15px] font-semibold text-white cursor-pointer">
          Contact Us
        </div>
        <button className="py-[6px] text-xs lg:text-sm px-3 md:px-[22px] bg-[#74B700] rounded-full font-semibold">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
};

export default Header;
