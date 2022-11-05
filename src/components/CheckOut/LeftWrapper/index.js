import styles from './styles.module.css';
import CurrentState from './CurrentState';
import ShippingForm from './ShippingForm';
import WhatsNextToDoBTNs from './WhatsNextToDoBTNs'
const LeftWrapper = ()=>{
    return (
        <div className={styles.LeftWrapper}>
            <CurrentState/>
            <ShippingForm/>
            <WhatsNextToDoBTNs/>
        
        </div>
    );
}

export default LeftWrapper;