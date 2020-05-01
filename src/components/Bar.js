import React from "react";

const Bar = ({ orders, newOrder, barOrders }) => {
  return (
    <div className="component">
      <h1>Bar</h1>
      <h2>Number of BAR orders (props.orders): {orders}</h2>
      <h2>Number of TOTAL orders (props.barOrders): {barOrders}</h2>
      <button onClick={() => newOrder("bar")}>Add Order</button>
    </div>
  );
};

export default Bar;
