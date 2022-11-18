import React from "react";
import styles from "./styles.module.css";
import OrderedItem from "../OrderedItem";
const OrderWrapper = ({ Orders }) => {
  let TotalPrice = 0;
  let TotalDiscount = 0;
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.Title2}>
        <h3>Order total {Orders.length}</h3> <span className={styles.Edit}>Edit</span>
      </div>
      <div className={styles.ScrolledDiv}>
        {Orders.map((item, i) => {
          TotalPrice = TotalPrice + item.price * item.quantity;
          TotalDiscount =
            TotalDiscount + item.discount * item.price * item.quantity;
          return <OrderedItem key={i} OrderData={item} />;
        })}
      </div>

      <div className={styles.Title}>
        <span>Total Discount</span>
        <span>{TotalDiscount} $</span>
      </div>
      <div className={styles.Title}>
        <span>Total Order </span>
        <span>{TotalPrice - TotalDiscount} $</span>
      </div>
    </div>
  );
};

export default OrderWrapper;
