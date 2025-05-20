import { Outfit } from "next/font/google";
import React from "react";
import GrowthIMG from "@/public/images/pngs/growth-img.png";
import LifeBelowWaterImg from "@/public/images/svgs/below-water.svg";
import PovertyImg from "@/public/images/svgs/poverty.svg";
import ZeroHungerImg from "@/public/images/svgs/zero-hunger.svg";
import GoodHealtImg from "@/public/images/svgs/good-healt.svg";
import LifeBelowWater from "@/public/images/svgs/below-water.svg";
import GenderEqaulityImg from "@/public/images/svgs/genda-equality.svg";
import ClimateImg from "@/public/images/svgs/climate.svg";
import Image from "next/image";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const data = [
  {
    amt: "200+",
    title: "Onboarded Farmers",
    text: "A growing community of farmers already onboarded to our platform.",
  },
  {
    amt: "₦15M+",
    title: "Projected ROI",
    text: "Strong returns expected from our current farming cycle.",
  },
  {
    amt: "5+",
    title: "Strategic Partnerships",
    text: "Trusted partners helping us grow and scale faster.",
  },
  {
    amt: "5M+",
    title: "Grant Funding",
    text: "Early funding to build and expand our impact.",
  },
];

const sdgData = [
  {
    title: "No Pverty",
    img: PovertyImg,
  },
  {
    title: "ZERO HUNGER",
    img: ZeroHungerImg,
  },
  {
    title: "Good Health",
    img: GoodHealtImg,
  },
  {
    title: "Gender Equality",
    img: GenderEqaulityImg,
  },
  {
    title: "Climate Action",
    img: ClimateImg,
  },
  {
    title: "Life Below Water",
    img: LifeBelowWater,
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
          Our key milestones highlight the progress we are making on the ground.
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
              <div
                key={index}
                className="w-full flex flex-col items-center text-center"
              >
                <div
                  className={`${outFit.className} text-[44px] lg:text-[66px]`}
                >
                  {item.amt}
                </div>
                <div className="text-lg font-semibold text-[#070B05]">
                  {item.title}
                </div>
                <div className="mt-2 text-gray-500">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex md:flex-row flex-col gap-6 md:gap-10">
          <div
            className={`${outFit.className} text-[24px] md:w-1/3 text-[#070B05] sm:text-[34px]`}
          >
            SDG Targets
          </div>
          <div className="flex-1 flex gap-4 flex-wrap">
            {sdgData.map((item, index) => (
              <div className="bg-[#74B601] rounded-xl py-4 px-2 max-w-[110px] w-full">
                <div className="flex uppercase text-white text-xs max-w-[50px]">
                  <div>{index + 1}. {" "} </div>
                  <div>{" "}{item.title}</div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-end">
                    <Image
                      src={item.img}
                      width={30}
                      height={24}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
