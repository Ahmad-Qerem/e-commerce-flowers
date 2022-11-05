import React from "react";
import "./ReleventSection.css";
import Data from "../../../../Data.json";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import ReusableCard from "../ReusableCard/ReusableCard";

const flowerDataTwo = Data.flowerlist.slice(4, 8);
console.log(flowerDataTwo); // for testing purposes only

const ReleventSection = (props) => {
  return (
    <React.Fragment>
      <HeadingTitle title="Relevent" />

      <div className="newSection">
        <ReusableCard flowerData={flowerDataTwo} />
      </div>
    </React.Fragment>
  );
};

export default ReleventSection;
