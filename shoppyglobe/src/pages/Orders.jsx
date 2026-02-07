import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { formatPrice } from "../utils/formatPrice";

function Orders() {
  const [orders, setOrders] = useState([]);

  const currency = useSelector(state => state.currency);

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

      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <p>Order #{index + 1}</p>

          <p>
            Total: {formatPrice(order.total, currency)}
          </p>

          <p>Date: {order.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
