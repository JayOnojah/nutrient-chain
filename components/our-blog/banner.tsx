import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import { Outfit } from "next/font/google";
import BannerImg from "@/public/images/pngs/about-us/rice.png";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <div className="bg-[#FBFFF3]">
      <Navbar theme="light" />
      <div className="app-width  flex flex-col md:flex-row items-center gap-10 pb-32 pt-40">
        <div className="flex-1 order-2 md:order-1">
          <div className="text-[#74B601] font-bold text-xl">Our Blog</div>
          <div className={`${outFit.className} text-[40px] xl:text-[56px]`}>
            Insights from the Field
          </div>
          <div className="text-sm sm:text-base text-[#656565] mt-3">
            Stories, updates, and innovations shaping African agriculture.
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <Image
            src={BannerImg}
            width={560}
            height={560}
            alt="nutrient chain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
