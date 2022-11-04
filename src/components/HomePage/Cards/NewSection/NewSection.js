import React from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import "./NewSection.css";
import Data from "../../../../Data.json";

// const jsData = JSON.parse(flowerlist);
console.log(Data);
const NewSection = () => {
  return (
    <React.Fragment>
      <HeadingTitle title="New" />

      <div className="newSection"></div>
    </React.Fragment>
  );
};

export default NewSection;
