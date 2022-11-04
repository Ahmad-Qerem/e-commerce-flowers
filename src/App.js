import React from "react";
import "./App.css";
import NewSection from "./components/HomePage/Cards/NewSection/NewSection";
import ReleventSection from "./components/HomePage/Cards/ReleventSection/ReleventSection";
import Footer from "./components/HomePage/Footer/Footer";
import MainBanner from "./components/HomePage/MainBanner/MainBanner";
import SecondaryBanners from "./components/HomePage/SecondaryBanners/SecondaryBanners";
import LogoAndIcons from "./components/HomePage/TitleAndNav/LogoAndIcons/LogoAndIcons";
import NavBar from "./components/HomePage/TitleAndNav/NavBar/NavBar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
