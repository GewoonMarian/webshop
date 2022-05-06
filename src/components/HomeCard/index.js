import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function index({ id, title, imgUrl }) {
  return (
    <div>
      <h1 className="home-title"> {title}</h1>
      <NavLink to={`/Shop/${id}`}>
        <p className="home-image">
          <img src={imgUrl} alt="category" width="600px"></img>
        </p>
      </NavLink>
    </div>
  );
}
