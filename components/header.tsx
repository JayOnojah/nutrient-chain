import React from "react";

import Image from "next/image";
import logo from "@/public/images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between fixed px-6 xl:px-12 top-5 z-10 w-full mx-auto">
      <Image src={logo} alt="NutrientChain Logo" className="w-44 lg:w-64" />

      <div className="flex items-center gap-4 xl:gap-[40px]">
        <button className="py-[6px] text-xs lg:text-sm px-3 md:px-[22px] bg-[#74B700] rounded-full font-semibold">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
};

export default Header;
