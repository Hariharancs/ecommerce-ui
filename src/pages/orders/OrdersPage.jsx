import axios from "axios";
import { useState, useEffect, Fragment } from "react";

import { Header } from "../../components/header";
import { Order } from "./Order";
import "./OrdersPage.css";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();

    // axios.get("/api/orders?expand=products").then((response) => {
    //   setOrders(response.data);
    // });
  }, []);



  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return <Order key={order.id} order={order} loadCart={loadCart}/>;
          })}
        </div>
      </div>
    </>
  );
}
