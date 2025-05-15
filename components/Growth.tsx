import { Outfit } from "next/font/google";
import React from "react";
import GrowthIMG from "@/public/images/pngs/growth-img.png";
import Image from "next/image";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const data = [
  {
    amt: "200+",
    title: "Onboarded Farmers",
    text: "A growing community of farmers already using our platform.",
  },
  {
    amt: "₦10M+",
    title: "Projected ROI",
    text: "Strong returns expected from our current farming cycle.",
  },
  {
    amt: "20+",
    title: "Strategic Partnerships",
    text: "Trusted partners helping us grow and scale faster.",
  },
  {
    amt: "10M+",
    title: "Grant Funding",
    text: "Early funding to build and expand our impact.",
  },
];
const Growth = () => {
  return (
    <div className="bg-[#FBFFF3] ">
      <div className="app-width min-h-dvh py-10">
        <div
          className={`text-[32px] md:text-[40px] font-bold ${outFit.className}`}
        >
          Real Impact, Proven <span className="text-[#74B700]">Growth</span>
        </div>
        <div className="mt-2 text-xl text-gray-500">
          Our key milestones highlight the progress we're making on the ground.
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src={GrowthIMG}
              height={450}
              width={500}
              alt="nutrient chain"
            />
          </div>
          <div className="flex-1 grid gap-4 sm:grid-cols-2">
            {data.map((item, index) => (
              <div className="w-full flex flex-col items-center text-center">
                <div className={`${outFit.className} text-[66px]`}>{item.amt}</div>
                <div className="text-lg font-semibold text-[#070B05]">{item.title}</div>
                <div className="mt-2 text-gray-500">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
