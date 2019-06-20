import React from "react";
import "./component.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      BuySpecial: Shop <br /> for Good <br />
      causes
      {/* <div><button className="home-btn">Shop Now</button></div> */}
      <div>
          <NavLink to="/shop" className="home-btn">Shop Now</NavLink>
      </div>
      
    </div>
  );
};
