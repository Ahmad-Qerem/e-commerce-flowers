import React from "react";
import "./ReusableCard.css";

const ReusableCard = (props) => {
  const { flowerData } = props;
  return (
    <>
      {flowerData.map((flower) => {
        return (
          <div key={flower.productId}>
            <img src={flower.photo} alt={flower.category} />
            <h3>{flower.name}</h3>
            <p>{flower.price} $</p>
          </div>
        );
      })}
    </>
  );
};

export default ReusableCard;
