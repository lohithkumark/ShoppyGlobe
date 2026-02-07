import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../redux/cartSlice";
import { formatPrice } from "../utils/formatPrice";

function Checkout() {
  const cart = useSelector(state => state.cart);
  const currency = useSelector(state => state.currency);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  function placeOrder() {

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!window.confirm("Place this order?")) {
      return;
    }

    const order = {
      items: cart,
      total,
      date: new Date().toLocaleString()
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
    );

    dispatch(clearCart());

    navigate("/orders");
  }

  return (
    <div className="container">
      <h2>Checkout</h2>

      <p>
        Total: {formatPrice(total, currency)}
      </p>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
