import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

import { formatPrice } from "../utils/formatPrice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const currency = useSelector(state => state.currency);

  function handleIncrease() {
    dispatch(increaseQty(item.id));
  }

  function handleDecrease() {
    dispatch(decreaseQty(item.id));
  }

  function handleRemove() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div className="cart-item">
      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <div>
        <h4>{item.title}</h4>

        <p>{formatPrice(item.price, currency)}</p>

        <div>
          <button onClick={handleDecrease}>
            -
          </button>

          <span> {item.qty} </span>

          <button onClick={handleIncrease}>
            +
          </button>
        </div>

        <button onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
