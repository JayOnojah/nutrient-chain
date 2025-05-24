import BlogImg from "@/public/images/pngs/blog.png";
import Image from "next/image";
import { Clock4Icon } from "lucide-react";
import { shortenText } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const BlogCard = () => {
  const text = `Access to digital tools shouldn't depend on smartphones.
   Discover how USSD codes are breaking down barriers and giving smallholder
    farmers the power to manage their farms, access funding, and connect to the
     market — all from basic mobile phones.`;

  const targetLength = 100;

  return (
    <Link href={`/our-blog/single-blog`} className="w-full">
      <Image
        src={BlogImg}
        width={290}
        height={260}
        alt="nutrient chain blog"
        className="w-full"
      />
      <div className="flex items-center justify-between gap-4 mt-3 text-xs">
        <div className="text-[#74B601] rounded px-2 pt-1 bg-[#F2FEDC]">
          InclusiveAgritech
        </div>
        <div className="flex items-center gap-2 text-[#656565]">
          <Clock4Icon size={12} />
          <div className="">5min Read</div>
        </div>
      </div>
      <div className="text-lg font-bold mt-4">
        How USSD Technology Is Revolutionizing Farming for Rural Communities...
      </div>
      <div className="mt-3 text-[#656565]">
        {shortenText(text, targetLength)}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="nutrient chain"
          />
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <div className="text-sm text-[#656565]">By Jeremiah</div>
      </div>
    </Link>
  );
};

export default BlogCard;
