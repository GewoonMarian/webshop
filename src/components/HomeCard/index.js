import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <div>
      <h1 className="home-title"> {props.title}</h1>
      <p className="home-image">
        <img src={props.imgUrl} alt="category" width="600px"></img>
      </p>
    </div>
  );
}
