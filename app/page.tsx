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
      <div className="bg relative min-h-screen w-full max-w-[1400px] mx-auto px-6 xl:px-12 py-5 flex items-center">
        <div className="text-white">
          <div>
            <div
              className={`${bebasNeue.className} antialiased text-[35px] lg:text-[70px]  max-w-[700px] leading-none tracking-tight word-spacing`}>
              RE-THINKING AGRICULTURE WITHOUT BOUNDARIES IN AFRICA
            </div>
          </div>
          <div className="max-w-[600px] mt-2 text-[16px] lg:text-[18px] leading-none">
            Harnessing the power of blockchain to break barrier in African
            agriculture, empowering farmers, investors, and communities for a
            prosperous future.
          </div>

          <div className="max-w-[400px] mt-[50px] flex justify-between bg-white w-full pl-4 p-2 rounded-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 outline-none text-black px-2 py-1"
            />
            <button className="py-[6px] px-[22px] bg-[#74B700] rounded-full font-semibold">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
