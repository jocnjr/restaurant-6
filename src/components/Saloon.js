import React from "react";

const Saloon = ({ orders, newOrder }) => {
  return (
    <div className="component">
      <h1>Saloon</h1>
      <h2>Number of orders (props.orders): {orders}</h2>
      <button onClick={() => newOrder("saloon")}>Add Order</button>
    </div>
  );
};

export default Saloon;
