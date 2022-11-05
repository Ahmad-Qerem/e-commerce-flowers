import React from "react";
import "./MainBanner.css";

const MainBanner = (props) => {
  const { title, des } = props;
  return (
    <div className="mainBanner">
      <h2>{title}</h2>
      <p>{des}</p>
      <button>Shop Now &#8594; </button>
    </div>
  );
};

export default MainBanner;
