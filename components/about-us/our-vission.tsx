import { Outfit } from "next/font/google";
import IMG from "@/public/images/pngs/about-us/rice.png";
import Image from "next/image";
import SupportIMG1 from "@/public/images/pngs/support-mage (1).png";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const OurVission = () => {
  return (
    <>
      <div className="app-width flex gap-10 items-center flex-col md:flex-row mt-20 md:mt-40">
        <div className="flex-1 order-1 md:order-2">
          <div className={`${outFit.className} text-[34px]`}>
            Our Vission
          </div>
          <div className="text-sm sm:text-base text-[#656565] mt-3">
            We are a tech-driven agriculture platform focused on transforming
            how farming works across Africa. By combining blockchain
            transparency, satellite precision, USSD accessibility, and
            integrated financial services, we’re creating a farming system
            that’s inclusive, efficient, and built for scale.
          </div>
        </div>
        <div className="flex-1 order-2 md:order-1">
          <Image src={SupportIMG1} width={560} height={560} alt="cocoa" />
        </div>
      </div>

      <div className="app-width flex gap-10 items-center flex-col md:flex-row mt-20 md:mt-40">
        <div className="flex-1">
          <div className={`${outFit.className} text-[34px]`}>
            Our Vission
          </div>
          <div className="text-sm sm:text-base text-[#656565] mt-3">
            To build a thriving, transparent, and financially inclusive
            agricultural ecosystem that empowers every African farmer to grow
            and prosper.
          </div>
        </div>
        <div className="flex-1">
          <Image src={IMG} width={560} height={560} alt="cocoa" />
        </div>
      </div>
    </>
  );
};

export default OurVission;
