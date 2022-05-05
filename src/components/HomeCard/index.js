import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function index(props) {
  return (
    <div>
      <h1 className="home-title"> {props.title}</h1>
      <NavLink to={`/Shop/${props.categoryId}`}>
        <p className="home-image">
          <img src={props.imgUrl} alt="category" width="600px"></img>
        </p>
      </NavLink>
    </div>
  );
}
