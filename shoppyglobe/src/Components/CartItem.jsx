import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";
import { formatPrice } from "../utils/formatPrice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const currency = useSelector(state => state.currency.currency);
  const rate = useSelector(state => state.currency.rate);

  const price = item.price * rate;

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div>
        <h4>{item.title}</h4>
        <p>{formatPrice(price, currency)}</p>

        <div>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>

        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
