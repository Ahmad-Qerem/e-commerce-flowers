import React from "react";
import "./LogoAndIcons.css";
// import logo from "/images/logo.png";
// import searchIcon from "/images/Search.png";
// import cart from "/images/Cart.png";
const LogoAndIcons = () => {
  return (
    <div className="logoandicons">
      <small>London</small>
      <img src="./images/logo.png" alt="Logo" />
      <div className="searchAndCart">
        <img src="./images/Search.png" alt="Search Icon" />
        <img src="./images/Cart.png" alt="Buy Item Icon" />
      </div>
    </div>
  );
};

export default LogoAndIcons;
