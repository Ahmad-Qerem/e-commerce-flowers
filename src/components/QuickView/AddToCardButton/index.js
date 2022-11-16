import React from "react";
import styles from "./styles.module.css";

const AddToCardButton = () => {
  return (
    <div className={styles.BuyContainer}>
      <button className={styles.AddToCard}>ADD TO CARD</button>
      <img className={styles.BuyIcon}src="./images/Cart.png" alt="Buy Item Icon" />

    </div>
  );
};

export default AddToCardButton;
