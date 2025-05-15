import { Fragment } from "react";
import Banner from "@/components/Banner";
import Mission from "@/components/Mission";
import Growth from "@/components/Growth";
import FarmingCycleSupport from "@/components/FarmingCycleSupport";
import Unique from "@/components/Unique";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Mission />
      <Growth />
      <FarmingCycleSupport />
      <Unique />
    </Fragment>
  );
};

export default HomePage;
