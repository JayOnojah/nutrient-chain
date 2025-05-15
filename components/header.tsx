import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Header = () => {
  const menuItem = [{ title: "About Us", url: "#" }];
  return (
    <div className="flex items-center justify-between fixed px-6 xl:px-12 top-5 z-10 w-full mx-auto">
      <Image src={logo} alt="NutrientChain Logo" className="w-12 lg:w-[64]" />

      <div className="flex items-center gap-4 xl:gap-[40px]">
        {/* <Socials /> */}

        <a
          href="mailto:hi@nutrientchain.com"
          className="py-[8px] lg:py-[10px] text-xs lg:text-[14px] px-3 md:px-[22px] bg-[#74B700] rounded-full hover:bg-[#496912]"
        >
          Join the mission
        </a>
      </div>
    </div>
  );
};

export default Header;
