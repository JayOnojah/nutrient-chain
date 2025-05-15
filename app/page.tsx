import { Fragment } from "react";
import Banner from "@/components/Banner";
import Mission from "@/components/Mission";
import Growth from "@/components/Growth";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <Mission />
      <Growth />
    </Fragment>
  );
};

export default HomePage;
