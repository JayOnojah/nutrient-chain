import { Outfit } from "next/font/google";
import Image from "next/image";
import FarmerImg from "@/public/images/pngs/famer.png";
import ChainImg from "@/public/images/svgs/chain.svg";
import CoinImg from "@/public/images/svgs/coin.svg";
import ZapImg from "@/public/images/svgs/zap.svg";
import ScaleImg from "@/public/images/svgs/scale.svg";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const BuiltDifferently = () => {
  const data = [
    {
      title: "Simple Access with USSD",
      image: CoinImg,
      text: " No smartphone? No problem. Farmers can access the platform easily using USSD codes.",
    },
    {
      title: "Personalized Experiences",
      image: ZapImg,
      text: "Each farmer gets a unique profile tailored to their crops, needs, and growth journey.",
    },
    {
      title: "Smarter Supply Chains",
      image: ChainImg,
      text: "We streamline input delivery, logistics, and crop movement for better efficiency and reduced waste.",
    },
    {
      title: "Designed to Scale",
      image: ScaleImg,
      text: "From a single farm to entire regions, our system grows with you—seamlessly and sustainably.",
    },
  ];

  return (
    <div className="bg">
      <div className="min-h-dvh app-width bg-[#FBFFF3]/50 text-center py-10">
        <div className={`text-[30px] md:text-[40] ${outFit.className}`}>
          Why We are Built Differently
        </div>
        <div className="mt-2 text-gray-500 max-w-lg mx-auto">
          We bring a unique edge to agriculture with tools and systems designed
          for real farmers, real problems, and real impact.
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-10 lg:gap-20">
          <div className="flex-1 grid gap-6">
            {data.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div>
                  <div className="flex h-12 w-12 rounded-full justify-center items-center bg-[#74B601]">
                    <Image
                      src={item.image}
                      height={20}
                      width={20}
                      alt="chain"
                    />
                  </div>
                </div>
                <div className="text-left mt-2">
                  <div className={`${outFit.className} text-xl`}>
                    {item.title}
                  </div>
                  <div className="mt-1 text-[#475467]">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div>
              <Image src={FarmerImg} width={450} height={450} alt="farmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltDifferently;
