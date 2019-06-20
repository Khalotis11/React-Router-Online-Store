import React from "react";
import "./App.css";

import { Home } from "./components/Home";
import { Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import ShopNow from "./components/ShopNow";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>
          Moe's | <span>Ecommerce</span>
        </h2>
        <Navigation />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={ShopNow} />
    </div>
  );
}

export default App;
