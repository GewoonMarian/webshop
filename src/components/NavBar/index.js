import React from "react";
import "./style.css";
import { FcBusinessman } from "react-icons/fc";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <h1>MarLoes</h1>
      <div>
        <h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/details/:id">About</NavLink>
        </h3>
      </div>
      <div className="login">
        <h1>
          <NavLink to="/login"></NavLink>
          <FcBusinessman />
        </h1>
      </div>
      <div>
        <h1>
          <NavLink to="/shoppingCart"></NavLink>
          <GrCart />
        </h1>
      </div>
    </div>
  );
}
