import React, { useState } from "react";
import Circle from "@uiw/react-color-circle";
import styles from "./styles.module.css";
const CircularColor = () => {
  const [hex, setHex] = useState("#F44E3B");
  return (
    <div className={styles.CircularColor}>
      <p className={styles.ColorTitle}>Color:</p>
      <Circle
        colors={["#F44E3B", "#FFC0CB", "#A020F0", "#DBDF00"]}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
};

export default CircularColor;
