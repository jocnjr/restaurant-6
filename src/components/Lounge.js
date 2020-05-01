import React from "react";

const Lounge = ({ orders, newOrder, loungeMenu }) => {
  return (
    <div className="component">
      <h1>Lounge {loungeMenu && <i> - {loungeMenu}</i>}</h1>
      <h2>Number of orders (props.orders): {orders}</h2>
      <button onClick={() => newOrder("lounge")}>Add Order</button>
    </div>
  );
};

export default Lounge;
