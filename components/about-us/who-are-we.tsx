import Image from "next/image";
import IMG from "@/public/images/pngs/about-us/cocoa.png";
import { Outfit } from "next/font/google";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});
const WhoAreWe = () => {
  return (
    <div className="app-width flex items-center gap-10 flex-col md:flex-row mt-10 md:mt-40">
      <div className="flex-1">
        <div className={`${outFit.className} text-[34px]`}>Who We Are</div>
        <div className="text-sm sm:text-base text-[#656565] mt-3">
          We are a tech-driven agriculture platform focused on transforming how
          farming works across Africa. By combining blockchain transparency,
          satellite precision, USSD accessibility, and integrated financial
          services, we’re creating a farming system that’s inclusive, efficient,
          and built for scale.
        </div>
      </div>
      <div className="flex-1">
        <Image src={IMG} width={560} height={560} alt="cocoa" />
      </div>
    </div>
  );
};

export default WhoAreWe;
