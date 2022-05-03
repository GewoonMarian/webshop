import React from "react";
import "./style.css";
import { FcBusinessman } from "react-icons/fc";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
export default function NavBar() {
  return (
    <div className="navbar-container">
      <h1>MarLoes</h1>
      <div className="left-side">
        <h3>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Shop"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/details/:id"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            About
          </NavLink>
        </h3>
      </div>
      <div className="right-bar">
        <h1>
          <NavLink to="/login">
            <FcBusinessman />
          </NavLink>
        </h1>
        <div>
          <h1>
            <NavLink to="/ShoppingCart">
              <GrCart />
            </NavLink>
          </h1>
        </div>
        <div>
          <h1>
            <NavLink to="/Favorites">
              <MdFavorite />
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
}
