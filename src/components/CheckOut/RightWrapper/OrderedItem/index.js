import { useState } from 'react';
import styles from './styles.module.css';

const OrderedItem = ({OrderData})=>{
    const [Counter,SetCounter] = useState(OrderData.quantity);
    const HandelClick = (Type) =>{
        if (Type === "+"){
            console.log(Counter)
            SetCounter(Counter+1);
        }else if(Type === "-" && (Counter > 0)) {
            SetCounter(Counter-1);
        }
    }
    return (
        <div className={styles.MainWrapper}>
            <img src='./images/image1.png' alt='' className={styles.MyImage}/>
            <div className={styles.RightWrapper}>
                <div className={styles.Title}><span>{OrderData.name}</span><span>{OrderData.price * OrderData.quantity} $</span></div>
                <div className={styles.Counter}>
                    <div className={styles.Mark} onClick={()=>HandelClick("-")}>-</div>
                    <span className={styles.CounterText}>{Counter}{}</span>
                    <div className={styles.Mark} onClick={()=>HandelClick("+")}>+</div>
                </div>
            </div>
        </div>
    );
}
export default OrderedItem;