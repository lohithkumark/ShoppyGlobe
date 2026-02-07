import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("orders")
    ) || [];

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

          <p>Total: ${order.total}</p>

          <p>Date: {order.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
