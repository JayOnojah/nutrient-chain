import { Outfit } from "next/font/google";
import Image from "next/image";
import IMG from "@/public/images/pngs/team/team.png";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const Team = () => {
  return (
    <div className="app-width my-40 text-center">
      <div className={`${outFit.className} text-[32px] md:text-[40px]`}>
        Meet Our Team
      </div>
      <div className="mt-20 grid md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={IMG} width={390} height={380} alt="Jeremiah Onoja" />
            <div className="mt-2">
              <div className="font-bold text-sm">Jeremiah Onoja</div>
              <div className="text-xs text-[#656565] mt-1">CEO/Founder</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
