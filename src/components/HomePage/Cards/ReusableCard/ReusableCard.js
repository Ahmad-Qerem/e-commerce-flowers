import React from "react";
import "./ReusableCard.css";

const ReusableCard = (props) => {
  const { flowerData } = props;
  return (
    <>
      {flowerData.map((flower) => {
        return (
          <div key={flower.productId} className="cardFlower">
            <img src={flower.photo} alt={flower.category} />
            <div className="cartAndHeart">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <h3>{flower.name}</h3>
            <p>{flower.price} $</p>
          </div>
        );
      })}
    </>
  );
};

export default ReusableCard;
