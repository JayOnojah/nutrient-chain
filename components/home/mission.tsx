import { Outfit } from "next/font/google";
import MissionImage1 from "@/public/images/pngs/mission-image (1).png";
import MissionImage2 from "@/public/images/pngs/mission-image (2).png";
import MissionImage3 from "@/public/images/pngs/mission-image (3).png";
import MissionImage4 from "@/public/images/pngs/mission-image (4).png";
import Image, { StaticImageData } from "next/image";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

interface IProps {
  image: StaticImageData;
  text: string;
  title: string;
}

const Mission = () => {
  const MissionCard = ({ image, text, title }: IProps) => (
    <div className="w-full p-5 flex flex-col items-center gap-6 text-center">
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
      title: "Easy Farmer Financing",
      text: "Farmers get access to funding without the stress of traditional banks.",
    },
    {
      image: MissionImage2,
      title: "Direct Market Access",
      text: "We connect farmers straight to buyers, no middlemen, better profits",
    },
    {
      image: MissionImage3,
      title: "Predictable Returns",
      text: "Our tools help farmers plan better and earn more from each season.",
    },
    {
      image: MissionImage4,
      title: "Grow Local, Feed Global",
      text: "We help African farmers grow enough to feed their communities and beyond.",
    },
  ];
  return (
    <div className="bg py-10">
      <div className="app-width min-h-dvh flex flex-col items-center justify-center">
        <div className="max-w-[500px] mx-auto text-center">
          <div className={`${outFit.className}  text-[34px] text-[#070B05]`}>
            Built to Solve Real Farming Challenges
          </div>
          <div className="mt-3 text-[#656565]">
            We remove barriers across the agricultural chain—so farmers can grow
            more with less stress.
          </div>
        </div>

        <div className="mt-16 w-full grid sm:grid-cols-2 md:grid-cols-4">
          {data.map((item, index) => (
            <MissionCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
