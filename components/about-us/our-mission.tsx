import { Outfit } from "next/font/google";
import Image from "next/image";
import IMG from "@/public/images/pngs/about-us/cocoa-2.png";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const OurMission = () => {
  return (
    <div className="app-width flex gap-10 items-center flex-col md:flex-row mt-40">
      <div className="flex-1 order-1 md:order-2">
        <div className={`${outFit.className} text-[34px]`}>Our Mission</div>
        <div className="text-sm sm:text-base text-[#656565] mt-3">
          To simplify the entire agricultural value chain—from onboarding to
          harvest—by providing smart tools, accessible financing, and end-to-end
          support for farmers, funders, and partners.
        </div>
      </div>
      <div className="flex-1 order-2 md:order-1">
        <Image src={IMG} width={560} height={560} alt="cocoa" />
      </div>
    </div>
  );
};

export default OurMission;
