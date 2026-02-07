import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector(state => state.cart);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
