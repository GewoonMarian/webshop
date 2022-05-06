import React from "react";
import "./style.css";
import { FcBusinessman } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { ImUserPlus } from "react-icons/im";
import Searchbar from "../Searchbar";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <div>
          <span className="marloes">MarLoes</span>
          <span className="shop">Shop</span>
        </div>

        <h3>
          <NavLink
            className="link-form"
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            className="link-form"
            to="/Shop"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Shop
          </NavLink>
          <NavLink
            className="link-form"
            to="/details/:id"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            About
          </NavLink>
        </h3>
        {/* <input type="text" className="search-bar" /> */}
        <Searchbar />

        {/* <BsSearch /> */}
      </div>
      <div>
        <h1>
          <NavLink className="link-form" to="/Signup">
            <ImUserPlus />
          </NavLink>
        </h1>
      </div>
      <div className="right-bar">
        <h1>
          <NavLink className="link-form" to="/login">
            <FcBusinessman />
          </NavLink>
        </h1>
        <div>
          <h1>
            <NavLink className="link-form" to="/ShoppingCart">
              <GrCart />
            </NavLink>
          </h1>
        </div>
        <div>
          <h1>
            <NavLink className="link-form" to="/Favorites">
              <MdFavorite />
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
}
