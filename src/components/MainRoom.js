import React from "react";
import Lounge from "./Lounge";
import Saloon from "./Saloon";

const MainRoom = ({ orders, newOrder, loungeMenu }) => {
  return (
    <div className="component">
      <h1>MainRoom</h1>
      <Lounge loungeMenu={loungeMenu} newOrder={newOrder} orders={orders} />
      <Saloon newOrder={newOrder} orders={orders} />
    </div>
  );
};

export default MainRoom;
