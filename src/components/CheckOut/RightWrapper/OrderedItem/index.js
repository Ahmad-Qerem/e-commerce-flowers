import styles from './styles.module.css';

const OrderedItem = ({OrderData})=>{
    return (
        <div >
            <img src='' alt=''/>
            <div>
                <div><span>{OrderData.name}</span><span>{OrderData.price * OrderData.quantity}</span></div>
                <div>
                    <div>-</div>
                    <span>{OrderData.quantity}</span>
                    <div>+</div>
                </div>
            </div>
        </div>
    );
}
export default OrderedItem;