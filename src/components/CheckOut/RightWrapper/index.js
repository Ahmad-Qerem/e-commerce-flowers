import styles from "./styles.module.css";
import OrderedItem from "./OrderedItem";
const RightWrapper = () => {
  let TotalPrice = 0;
  let TotalDiscount = 0;
  const Orders = [
    {
      name: "type 1 ",
      quantity: 1,
      price: 10,
      discount: 0.2,
    },
    {
      name: "type 2 ",
      quantity: 2,
      price: 10,
      discount: 0.2,
    },
    {
      name: "type 3 ",
      quantity: 1,
      price: 10,
      discount: 0.2,
    },
  ];
  return (
    <div>
      <div>
        <h3>Order total {Orders.length}</h3> <span>Edit</span>
      </div>
      {Orders.map((item,i) => {
        TotalPrice = TotalPrice + item.price * item.quantity;
        TotalDiscount = TotalDiscount + item.discount * item.price * item.quantity;
        return <OrderedItem key={i} OrderData={item} />;
      })}
      <div>
        <span>Total Discount</span>
        <span>{TotalDiscount}</span>
      </div>
      <div>
        <span>Order total</span>
        <span>{TotalPrice - TotalDiscount}</span>
      </div>
    </div>
  );
};

export default RightWrapper;
