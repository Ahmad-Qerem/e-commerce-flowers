import React from "react";
import styles from "./styles.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const MyCustomRadio = ({ item, i }) => {
  return (
    <div className={styles.Radio}>
      <FormControlLabel key={i} className={styles.Class1} value={item.title} control={<Radio />} />
      <div className={styles.RightWrapper}>
        <div className={styles.TopRightWrapper}>
          <div>{item.title}</div>
          <div>{item.price} $</div>
        </div>
        <p>{item.describe}</p>
      </div>
    </div>
  );
};

export default MyCustomRadio;
