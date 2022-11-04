import React from "react";
import "./App.css";
import NewSection from "./components/HomePage/Cards/NewSection/NewSection";
import MainBanner from "./components/HomePage/MainBanner/MainBanner";
import SecondaryBanners from "./components/HomePage/SecondaryBanners/SecondaryBanners";
import LogoAndIcons from "./components/HomePage/TitleAndNav/LogoAndIcons/LogoAndIcons";
import NavBar from "./components/HomePage/TitleAndNav/NavBar/NavBar";

function App() {
  return (
    <>
      <LogoAndIcons />
      <NavBar />
      <MainBanner
        title="40 % OFF"
        des="Best Deals This Week. Fresh Flowers, Plants and Gifts !"
      />
      <SecondaryBanners />
      <NewSection />
    </>
  );
}

export default App;
