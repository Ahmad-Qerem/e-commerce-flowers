import React from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus } from "react-icons/ai";
const DetailsComponent = ({instructions}) => {
  return (
    <div className={styles.DetailsComponent}>
    <details>
     
      <summary>Instructions
      <AiOutlinePlus color="blue"/>
      </summary>
     
     {instructions}
    </details>
    </div>
  );
};

export default DetailsComponent;
