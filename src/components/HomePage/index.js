import React from "react";
import NewSection from "./Cards/NewSection/NewSection";
import ReleventSection from "./Cards/ReleventSection/ReleventSection";
import Footer from "./Footer/Footer";
import MainBanner from "./MainBanner/MainBanner";
import SecondaryBanners from "./SecondaryBanners/SecondaryBanners";
import LogoAndIcons from "./TitleAndNav/LogoAndIcons/LogoAndIcons";
import NavBar from "./TitleAndNav/NavBar/NavBar";
const index = () => {
  return (
    <React.Fragment>
      <div className="Container">
        <LogoAndIcons />
        <NavBar />
        <MainBanner
          title="40 % OFF"
          des="Best Deals This Week. Fresh Flowers, Plants and Gifts !"
        />
        <SecondaryBanners />
        <NewSection />
        <ReleventSection />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default index;
