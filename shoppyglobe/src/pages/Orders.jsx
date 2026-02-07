import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils/formatPrice";

function Orders() {
  const [orders, setOrders] = useState([]);

  const currency = useSelector(state => state.currency.currency);
  const rate = useSelector(state => state.currency.rate);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  if (orders.length === 0) {
    return <h3>No orders yet</h3>;
  }

  return (
    <div className="container">
      <h2>My Orders</h2>

      {orders.map((order, i) => (
        <div key={i} className="order-card">
          <p>Order #{i + 1}</p>
          <p>
            Total:{" "}
            {formatPrice(order.total * rate, currency)}
          </p>
          <p>Date: {order.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
