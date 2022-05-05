import { NavLink } from "react-router-dom";
import "./style.css";

export default function ProductsCard(props) {
  return (
    <div className="cards">
      <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <div className="product-image">
          <img src={props.imgUrl} alt="" width="200px" />
        </div>
        <NavLink to={`/details/${props.id}`}>
          <button style={{ color: "white", background: "green" }}>
            <span>€{props.price}</span>
            <br />
            <span>Buy Now</span>
          </button>
        </NavLink>
        <p className="card-desc">{props.description}</p>
        <p style={{ color: "red" }}>{props.rating} Stars</p>
      </div>
    </div>
  );
}
