import styles from './styles.module.css';
import React from 'react';
import Title from './Title';
import LeftWrapper from './LeftWrapper';
import RightWrapper from './RightWrapper';

const CheckOut = (  )=>{
    return (
        <div className={styles.MainWrapper}>
            <Title Text={"Checkout"}/>
            <LeftWrapper/>
            <RightWrapper />
        </div>
    );

}
export default CheckOut;
