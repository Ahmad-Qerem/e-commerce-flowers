import React from 'react'
import styles from "./styles.module.css";

const Price = ({currentPrice,oldPrice}) => {
  return (
    <div className={styles.PriceContainer}>
     <h2 className={styles.CurrentPrice}>{currentPrice}</h2>
     <p className={styles.OldPrice}><s>{oldPrice}</s>  </p>


    </div>
  )
}

export default Price