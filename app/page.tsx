import { Fragment } from "react";
import FarmingCycleSupport from "@/components/home/farming-cycle-support";
import FeaturesSection from "@/components/home/features-section";
import Banner from "@/components/home/banner";
import Mission from "@/components/home/mission";
import Growth from "@/components/home/growth";
import NewsletterSubscription from "@/components/home/news-letter";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import HowItWorks from "@/components/home/how-it-works";
import BuiltDifferently from "@/components/home/built-differently";
import FarmingCycleSupportSmall from "@/components/home/farming-cycle-support-small";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Mission />
      <Growth />
      <FarmingCycleSupport />
      <FarmingCycleSupportSmall />
      <FeaturesSection />
      <BuiltDifferently />
      <HowItWorks />
      <FaqSection />
      <NewsletterSubscription />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
