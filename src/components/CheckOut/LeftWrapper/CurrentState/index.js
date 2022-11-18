import styles from './styles.module.css'
import MyState from './MyState'
const CurrentState = ()=>{
    const states = [
        {
            id:1,
            title:"Contacts"
        },
        {
            id:2,
            title:"Shipping"
        },
        {
            id:3,
            title:"Payment"
        },
        
    ];
    return(
        <div className={styles.MainWrapper}>
            {states.map((item)=>{
                return(
                    <MyState item={item} />
                );
            })}
        </div>
    );
}
export default CurrentState;