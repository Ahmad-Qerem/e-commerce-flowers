import styles from './styles.module.css';
import React from 'react';
import BTN from './BTN';
const WhatsNextToDoBTNs = ()=>{
    return(
        <div className={styles.MainWrapper}>
            <BTN Text={"Button 2"} Type={2}>&larr;</BTN>
            <BTN Text={"Button 1"} Type={1}>&rarr;</BTN>

            	
        </div>
    );
}
export default WhatsNextToDoBTNs;