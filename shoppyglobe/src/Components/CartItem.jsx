import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={styles.item}>
      <img src={item.thumbnail} alt={item.title} style={styles.img} />

      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>

        <div style={styles.qtyBox}>
          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <span>{item.qty}</span>

          <button onClick={() => dispatch(increaseQty(item.id))}>
            +
          </button>
        </div>

        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
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
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0"
  }
};

export default CartItem;
