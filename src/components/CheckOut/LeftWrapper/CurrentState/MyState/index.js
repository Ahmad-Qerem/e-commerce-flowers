import React from 'react'
import styles from './styles.module.css'
const MyState = ({item}) => {
  return (
    
    <div className={styles.MainWrapper}>
        <div className={styles.Circle}>{item.id}</div>
        <div className={styles.ProgressTitle}>{item.title}</div>
        <span className={styles.MySpan}><hr/></span>
    </div>
  )
}

export default MyState