import React from "react";
import Navbar from "../navbar";
import BannerImg from "@/public/images/pngs/about-us/about-banner.png";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <div className="bg-[#FBFFF3]">
      <Navbar theme="light" />
      <div className="app-width  flex flex-col md:flex-row items-center gap-10 pb-32 pt-40">
        <div className="flex-1">
          <div className="text-[#74B601] font-bold text-xl">About Us</div>
          <div className={`${outFit.className} text-[40px] xl:text-[56px]`}>
            Transforming Agriculture In African from the Ground Up
          </div>
          <div className="text-sm sm:text-base text-[#656565] mt-3">
            We’re building a future where African farmers thrive. By combining
            smart technology with deep local insight, we simplify the full
            farming cycle—from onboarding to harvest, funding to market. Our
            tools are made for real people, real farms, and real impact.
          </div>
        </div>
        <div className="flex-1">
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
