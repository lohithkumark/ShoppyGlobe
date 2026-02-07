import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleOrder(e) {
    e.preventDefault();

    alert("Order placed");

    dispatch(clearCart());

    navigate("/");
  }

  return (
    <div className="container">
      <h2>Checkout</h2>

      <form onSubmit={handleOrder}>
        <input required placeholder="Name" />
        <br /><br />

        <input required placeholder="Address" />
        <br /><br />

        <button>Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
