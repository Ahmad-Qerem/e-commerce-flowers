import React from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import "./NewSection.css";
import Data from "../../../../Data.json";

// const jsData = JSON.parse(flowerlist);
const flowerData = Data.flowerlist.slice(0, 4);
console.log(flowerData);
const NewSection = () => {
  return (
    <React.Fragment>
      <HeadingTitle title="New" />

      <div className="newSection">
        {flowerData.map((flower) => {
          return (
            <div key={flower.productId}>
              <img src={flower.photo} alt={flower.category} />
              <h3>{flower.name}</h3>
              <p>{flower.price} $</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default NewSection;
