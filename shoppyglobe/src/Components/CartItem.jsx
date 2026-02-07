import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div style={styles.item}>
      <img src={item.thumbnail} alt={item.title} style={styles.img} />

      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
        <p>Qty: {item.qty}</p>

        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    borderBottom: "1px solid #ddd"
  },

  img: {
    width: "80px",
    height: "80px",
    objectFit: "cover"
  }
};

export default CartItem;
