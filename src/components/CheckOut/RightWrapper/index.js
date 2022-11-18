import styles from "./styles.module.css";
import React from "react";
import OrderWrapper from './OrderWrapper';
const RightWrapper = () => {
  const Orders = [
    {
      name: "type 1 ",
      quantity: 1,
      price: 10,
      discount: 0.2,
    },
    {
      name: "type 2 ",
      quantity: 2,
      price: 10,
      discount: 0.2,
    },
    {
      name: "type 3 ",
      quantity: 1,
      price: 10,
      discount: 0.2,
    },{
      name: "type 1 ",
      quantity: 1,
      price: 10,
      discount: 0.2,
    },
    {
      name: "type 2 ",
      quantity: 2,
      price: 10,
      discount: 0.2,
    },
    {
      name: "type 3 ",
      quantity: 1,
      price: 10,
      discount: 0.2,
    },
  ];
  return (
    <div className={styles.RightWrapper}>
      <OrderWrapper Orders={Orders}/>
    </div>
  );
};

export default RightWrapper;
