import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return(
        <div className="navigation">
        <Link className="nav-bar nav-bar1" to="/">Home</Link>
        <Link className="nav-bar nav-bar2" to="/shop">Shop Now</Link>

        </div>
    )
}