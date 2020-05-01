import React, { Component } from "react";
import MainRoom from "./MainRoom";
import Bar from "./Bar";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0,
      barOrders: 0,
      loungeOrders: 0,
      saloonOrders: 0
    };
    this.newOrder = this.newOrder.bind(this);
  }

  newOrder(local) {
    console.log("new order!", local);
    if (local === "bar") {
      this.setState({
        orders: this.state.orders + 1,
        barOrders: this.state.barOrders + 1
      });
    } else if (local === "lounge") {
      this.setState({
        orders: this.state.orders + 1,
        loungeOrders: this.state.loungeOrders + 1
      });
    } else {
      this.setState({
        orders: this.state.orders + 1,
        saloonOrders: this.state.saloonOrders + 1
      });
    }
  }

  render() {
    return (
      <div className="component">
        <h1>Restaurant - lifting the state up</h1>
        <h2>Number of TOTAL orders (this.state.orders): {this.state.orders}</h2>
        <h2>
          Number of BAR orders (this.state.barOrders): {this.state.barOrders}
        </h2>
        <h2>
          Number of LOUNGE orders (this.state.loungeOrders):{" "}
          {this.state.loungeOrders}
        </h2>
        <h2>
          Number of SALOON orders (this.state.saloonOrders):{" "}
          {this.state.saloonOrders}
        </h2>
        <Bar newOrder={this.newOrder} {...this.state} />
        <MainRoom
          loungeMenu="newMenu"
          newOrder={this.newOrder}
          orders={this.state.orders}
        />
      </div>
    );
  }
}

export default Restaurant;
