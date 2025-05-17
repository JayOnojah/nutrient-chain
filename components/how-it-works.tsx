import { Outfit } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import MissionImage1 from "@/public/images/pngs/mission-image (1).png";
import MissionImage2 from "@/public/images/pngs/mission-image (2).png";
import MissionImage3 from "@/public/images/pngs/mission-image (3).png";

// import MissionImage4 from "@/public/images/pngs/mission-image (4).png";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

interface IProps {
  image: StaticImageData;
  text: string;
  title: string;
  index: number;
}

const HowItWorks = () => {
  const MissionCard = ({ image, text, title, index }: IProps) => (
    <div className="w-full p-5 flex flex-col items-center gap-6 text-center">
      <div className="flex justify-center items-center h-10 w-10 rounded-full text-white bg-[#74B601]">
        {index + 1}
      </div>
      <div className="max-h-[116px]">
        <Image src={image} height={136} width={136} alt="Farmer" />
      </div>
      <div className="mt-4 font-bold text-2xl max-w-[180px]">{title}</div>
      <div className="mt-1 text-gray-400 ">{text}</div>
    </div>
  );

  const data = [
    {
      image: MissionImage1,
      title: "Onboard & Map the Farm",
      text: "We register farmers, map their farmlands, and assess their needs for tailored support.",
    },
    {
      image: MissionImage2,
      title: "Access Tools & Resources",
      text: "Farmers receive inputs, financial support, and real-time insights powered by satellite tech.",
    },
    {
      image: MissionImage3,
      title: "Grow, Monitor & Earn",
      text: "We track progress, support harvests, and connect farmers to markets and funding opportunities.",
    },
  ];
  return (
    <div className="bg-[#0D2200] py-10">
      <div className="app-width min-h-dvh flex flex-col items-center text-white justify-center">
        <div className="max-w-[500px] mx-auto text-center">
          <div className={`${outFit.className} text-[#74B601] text-xl`}>
            How it works
          </div>
          <div className="mt-3 text-white text-[32px] md:text-[40px]">
            Simple Steps to Smarter Farming
          </div>
        </div>

        <div className="mt-16 w-full grid sm:grid-cols-2 md:grid-cols-3">
          {data.map((item, index) => (
            <MissionCard index={0} key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
