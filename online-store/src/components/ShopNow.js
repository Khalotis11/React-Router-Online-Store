import React, { Component } from "react";
import Data from "../dummyData";

export default class ShopNow extends Component {
  constructor() {
    super();
    this.state = {
      data: Data
    };
  }
  render() {
    return (
      <div className="shop-container">
        {this.state.data.map(item => (
          <div>
            <img src={item.imageUrl} />
            <h3>{item.name}</h3>
            {item.price}
          </div>
        ))}
      </div>
    );
  }
}
