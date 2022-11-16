import React from "react";
import QuantityCounter from "./QuantityCounter";
import styles from "./styles.module.css";

const Count = () => {
  return (
    <div className={styles.Count}>
      <p className={styles.Title}>Count:</p>
      <QuantityCounter />
    </div>
  );
};

export default Count;
