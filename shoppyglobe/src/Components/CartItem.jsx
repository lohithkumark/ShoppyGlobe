import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} />

      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>

        <div>
          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <span> {item.qty} </span>

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

export default CartItem;
