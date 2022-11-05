import React from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import "./NewSection.css";
import Data from "../../../../Data.json";
import ReusableCard from "../../../Shared/ReusableCard/ReusableCard";

// What I did here is simply limiting the array to only four elements using slice function instead of many.
// we can Apply pagination later .. simple idea
const flowerData = Data.flowerlist.slice(0, 4);
console.log(flowerData);
const NewSection = () => {
  return (
    <React.Fragment>
      <HeadingTitle title="New" />

      <div className="newSection">
        <ReusableCard flowerData={flowerData} />
      </div>
    </React.Fragment>
  );
};

export default NewSection;
