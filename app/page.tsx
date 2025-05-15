import { Fragment } from "react";
import Banner from "@/components/Banner";
import Mission from "@/components/Mission";
import Growth from "@/components/Growth";
import FarmingCycleSupport from "@/components/FarmingCycleSupport";
import FeaturesSection from "@/components/FeaturesSection";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Mission />
      <Growth />
      <FarmingCycleSupport />
      <FeaturesSection />
    </Fragment>
  );
};

export default HomePage;
