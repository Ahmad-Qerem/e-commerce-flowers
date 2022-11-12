import React, { useState } from "react";
import "./ReusableCard.css";
import QuickView from "../../../QuickView";
const ReusableCard = (props) => {
  const { flowerData } = props;
  const [openModal, setOpenModal] = useState(false);
  const [Index, setIndex] = useState(null);
  const handelModal = (index) => {
    setOpenModal(true);
    setIndex(index);
  };
  return (
    <>
      {flowerData.map((flower, index) => {
        return (
          <>
            <div key={flower.productId} className="cardFlower">
              <img src={flower.photo} alt={flower.category} />
              <div className="cartAndHeart">
                <i class="fa-regular fa-heart"></i>
                <i
                  class="fa-solid fa-cart-shopping"
                  onClick={() => handelModal(index)}
                ></i>
              </div>
              <h3>{flower.name}</h3>
              <p>{flower.price} $</p>
            </div>
            {Index === index && openModal && (
              <QuickView setOpenModal={setOpenModal} {...flower} />
            )}
          </>
        );
      })}
    </>
  );
};

export default ReusableCard;
