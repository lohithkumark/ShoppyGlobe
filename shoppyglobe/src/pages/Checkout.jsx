import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  function placeOrder() {
    const order = {
      items: cart,
      total,
      date: new Date().toLocaleString()
    };

    const old =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...old, order])
    );

    dispatch(clearCart());

    navigate("/orders");
  }

  if (cart.length === 0) {
    return <h3>Cart is empty</h3>;
  }

  return (
    <div className="container">
      <h2>Checkout</h2>

      <p>Total: ${total}</p>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
