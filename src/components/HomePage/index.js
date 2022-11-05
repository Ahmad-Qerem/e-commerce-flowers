import React from "react";
import NewSection from "./Cards/NewSection/NewSection";
import ReleventSection from "./Cards/ReleventSection/ReleventSection";
import MainBanner from "./MainBanner/MainBanner";
import SecondaryBanners from "./SecondaryBanners/SecondaryBanners";
const index = () => {
  return (
    <React.Fragment>
      <MainBanner
        title="40 % OFF"
        des="Best Deals This Week. Fresh Flowers, Plants and Gifts !"
      />
      <SecondaryBanners />
      <NewSection />
      <ReleventSection />
    </React.Fragment>
  );
};

export default index;
