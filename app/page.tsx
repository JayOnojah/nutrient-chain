import { Fragment } from "react";
import Header from "@/components/header";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <div className="bg relative min-h-screen w-full mx-auto px-6 xl:px-12 py-5 flex items-center">
        <div className="text-white">
          <div>
            <div
              className={`${bebasNeue.className} mt-60 antialiased text-[35px] lg:text-[70px]  max-w-[700px] leading-none tracking-tight word-spacing`}>
              RE-THINKING AGRICULTURE WITHOUT BOUNDARIES IN AFRICA
            </div>
          </div>
          <div className="max-w-[700px] mt-2 text-[14px] lg:text-[16px] tracking-tighter word-spacing">
            A Unified Digital ecosystem harnessing the power of FinTech and
            Blockchain to break barriers in African agriculture, empowering
            farmers, investors, and communities for a prosperous future.
          </div>

          <div className="max-w-[450px] mt-[50px] flex justify-between bg-white w-full pl-4 p-1.5 rounded-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 outline-none text-black px-2 py-1 max-w-[200px]"
            />
            <button className="py-[2px] lg:py-[6px] px-[10px] lg:px-[22px] bg-[#74B700] rounded-full text-[12px] lg:text-[14px] max-w-[150px] block">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
