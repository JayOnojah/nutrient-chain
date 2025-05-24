import Navbar from "@/components/navbar";
import { ArrowLeftIcon, Clock4Icon } from "lucide-react";
import Link from "next/link";
import BlogImg from "@/public/images/pngs/blog.png";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

const Page = () => {
  return (
    <div>
      <Navbar theme="light" />
      <div className="app-width my-32">
        <Link href="/our-blog">
          <div className="flex items-center gap-2 cursor-pointer">
            <ArrowLeftIcon />
            <div className="">back</div>
          </div>
        </Link>

        <div className="mt-2 overflow-hidden">
          <Image
            src={BlogImg}
            width={290}
            height={200}
            alt="nutrient chain blog"
            className="w-full md:h-[490px] rounded-[32px]"
          />
        </div>

        <div className="mt-10 max-w-[1000px] mx-auto">
          <div className="flex items-center gap-2 mt-3 text-xs">
            <div className="text-[#74B601] px-2 pt-1 bg-[#F2FEDC] rounded">
              InclusiveAgritech
            </div>
            <div className="flex items-center gap-2 text-[#656565]">
              <Clock4Icon size={12} />
              <div className="">5min Read</div>
            </div>
          </div>

          <div className="mt-3">
            <div className={`${outFit.className} text-[40px]`}>
              How USSD Technology Is Revolutionizing Farming for Rural
              Communities
            </div>
            <div className="mt-2 text-[#656565]">
              Access to digital tools shouldn't depend on smartphones. Discover
              how USSD codes are breaking down barriers and giving smallholder
              farmers the power to manage their farms, access funding, and
              connect to the market — all from basic mobile phones.
            </div>

            <div className={`${outFit.className} text-[34px] mt-10`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </div>

            <div>
              <div className={`${outFit.className} text-2xl mt-4`}>
                Creating a Memorable Brand Identity
              </div>

              <div className="mt-2">
                First step to hosting a successful webinar, always make your
                title catchy. Your webinar topic and title play an important
                role in the success of the webinar. You want prospective
                attendees to get hooked and anticipate what the webinar holds
                even before it’s time.
                <br />
                <br />
                When choosing a topic, have a target audience in mind. What will
                your target audience listen to? What subjects are they
                interested in learning about? Having this in mind will help you
                come up with a topic that will be beneficial to your audience.
                <br />
                <br />
                Choosing a webinar topic because you feel it’s a good idea won’t
                get you the clicks. Put your audience first and you’ll never go
                wrong with your topic.
              </div>
            </div>
            
            <div>
              <div className={`${outFit.className} text-2xl mt-4`}>
                Creating a Memorable Brand Identity
              </div>

              <div className="mt-2">
                First step to hosting a successful webinar, always make your
                title catchy. Your webinar topic and title play an important
                role in the success of the webinar. You want prospective
                attendees to get hooked and anticipate what the webinar holds
                even before it’s time.
                <br />
                <br />
                When choosing a topic, have a target audience in mind. What will
                your target audience listen to? What subjects are they
                interested in learning about? Having this in mind will help you
                come up with a topic that will be beneficial to your audience.
                <br />
                <br />
                Choosing a webinar topic because you feel it’s a good idea won’t
                get you the clicks. Put your audience first and you’ll never go
                wrong with your topic.
              </div>
            </div>

            <div>
              <div className={`${outFit.className} text-2xl mt-4`}>
                Creating a Memorable Brand Identity
              </div>

              <div className="mt-2">
                First step to hosting a successful webinar, always make your
                title catchy. Your webinar topic and title play an important
                role in the success of the webinar. You want prospective
                attendees to get hooked and anticipate what the webinar holds
                even before it’s time.
                <br />
                <br />
                When choosing a topic, have a target audience in mind. What will
                your target audience listen to? What subjects are they
                interested in learning about? Having this in mind will help you
                come up with a topic that will be beneficial to your audience.
                <br />
                <br />
                Choosing a webinar topic because you feel it’s a good idea won’t
                get you the clicks. Put your audience first and you’ll never go
                wrong with your topic.
              </div>
            </div>

            <div>
              <div className={`${outFit.className} text-2xl mt-4`}>
                Creating a Memorable Brand Identity
              </div>

              <div className="mt-2">
                First step to hosting a successful webinar, always make your
                title catchy. Your webinar topic and title play an important
                role in the success of the webinar. You want prospective
                attendees to get hooked and anticipate what the webinar holds
                even before it’s time.
                <br />
                <br />
                When choosing a topic, have a target audience in mind. What will
                your target audience listen to? What subjects are they
                interested in learning about? Having this in mind will help you
                come up with a topic that will be beneficial to your audience.
                <br />
                <br />
                Choosing a webinar topic because you feel it’s a good idea won’t
                get you the clicks. Put your audience first and you’ll never go
                wrong with your topic.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
