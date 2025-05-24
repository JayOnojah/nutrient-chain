import Banner from "@/components/about-us/banner";
import OurMission from "@/components/about-us/our-mission";
import OurVission from "@/components/about-us/our-vission";
import Team from "@/components/about-us/team";
import WhoAreWe from "@/components/about-us/who-are-we";
import Footer from "@/components/footer";
import NewsletterSubscription from "@/components/home/news-letter";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />
      <WhoAreWe />
      <OurVission />
      <OurMission />
      <Team />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Page;
