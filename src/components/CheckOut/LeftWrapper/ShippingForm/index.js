import styles from "./styles.module.css";
import React from "react";
// import { Radio, RadioGroup } from "react-radio-group";
const ShippingForm = ({}) => {
  const DeliveryMethod = [
    {
      title: "express delivery",
      describe: "in 3 to 7 days",
      price: 20,
    },
    {
      title: "free delivery",
      describe: "in 10 to 30 days",
      price: 0,
    },
  ];

  return (
    <form>
      <span>Delivery method</span>
    </form>
  );
};
export default ShippingForm;
