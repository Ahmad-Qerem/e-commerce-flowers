
import styles from './styles.module.css'
import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useRadioGroup } from '@mui/material/RadioGroup';
import MyCustomRadio from "./MyCustomRadio";
import AddressGetter from './AddressGetter';
import DateAndTimeGetter from './DateAndTimeGetter'
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
    <div className={styles.MainWrapper}>
      <FormControl>
        <FormLabel className={styles.DeliveryTitle} id="Delivery">Delivery method</FormLabel>
        <RadioGroup
          aria-labelledby="Delivery"
          defaultValue="femsale"
          name="radio-buttons-group"
        >
          {DeliveryMethod.map((item,i)=>{
            return (
              <MyCustomRadio item={item} i={i} />
            );
          })}

        </RadioGroup>
      </FormControl>
      <span className={styles.Title}>Delivery address</span>
      <AddressGetter/>
      <span className={styles.Title}>Date & time</span>
      <DateAndTimeGetter/>
    </div>
  );
};
export default ShippingForm;
