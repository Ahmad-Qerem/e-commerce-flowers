import styles from './styles.module.css';
import React from 'react';

const BTN =({Text,Type=1,children})=>{
    return(
        <div className={Type==1?styles.MyButton1:styles.MyButton2}>
            {Type==2 && <span>{children}</span>}
            <span>{Text}</span>
            { Type==1 && <span>{children}</span>}
        </div>
    );
}
export default BTN;