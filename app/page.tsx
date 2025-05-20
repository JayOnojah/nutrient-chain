import { Fragment } from "react";
import FarmingCycleSupport from "@/components/farming-cycle-support";
import FeaturesSection from "@/components/features-section";
import Banner from "@/components/banner";
import Mission from "@/components/mission";
import Growth from "@/components/growth";
import NewsletterSubscription from "@/components/news-letter";
import Footer from "@/components/footer";
import FaqSection from "@/components/faq";
import HowItWorks from "@/components/how-it-works";
import BuiltDifferently from "@/components/built-differently";
import FarmingCycleSupportSmall from "@/components/farming-cycle-support-small";

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
