"use client";

import Image from "next/image";
import { Outfit } from "next/font/google";
import Navbar from "../navbar";
import TMImg from "@/public/images/svgs/tm.svg";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <div className="bg-[#0D2200] pb-10">
      <Navbar />
      <div className="app-width pt-32 w-full mx-auto py-5 flex">
        <div className="text-white">
          <div className="flex gap-10 items-center justify-between">
            <div>
              <div
                className={`${outFit.className} antialiased text-[35px] lg:text-[56px] max-w-[846px]  word-spacing`}
              >
                Empowering African Farmers.{" "}
                <span className="text-[#74B700]">Nourishing the World.</span>
              </div>
              <div className="max-w-[700px] mt-2 text-[14px] lg:text-[16px] tracking-tighter word-spacing">
                We are unlocking prosperity for African farmers through
                blockchain, fintech, and data-driven agriculture. We use
                technology to empower smallholder farmers in Africa with access
                to finance, data-driven best practices, and access to local &
                global markets — driving food security for all.
              </div>
            </div>
            <div className="my-slow-spinner">
              <Image
                src={TMImg}
                height={100}
                width={100}
                alt="famers trade mark"
                className="hidden lg:inline"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-4">
            <a
              href="mailto:hi@nutrientchain.com"
              className="py-[8px] lg:py-[10px] text-xs lg:text-[14px] px-3 md:px-[22px] bg-[#74B700] rounded-full hover:bg-[#496912] transition-all duration-300"
            >
              Join the mission
            </a>
            <a
              href="mailto:hi@nutrientchain.com"
              className="py-[8px] lg:py-[10px] text-xs lg:text-[14px] px-3 md:px-[22px] text-[#74B700] bg-white hover:bg-[#74B700] rounded-full hover:text-white transition-all duration-300"
            >
              Learn more
            </a>
          </div>

          <div className="mt-16">
            <Image
              src="/images/pngs/banner-img.png"
              height={500}
              width={1216}
              alt="Nutrient chain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
