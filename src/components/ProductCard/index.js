import { NavLink } from "react-router-dom";
import "./style.css";

export default function ProductsCard(props) {
  return (
    <div className="cards">
      <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <NavLink to={`/details/${props.id}`}>
          <button>
            <span>€{props.price}</span>
            <br />
            <span>Buy Now</span>
          </button>
        </NavLink>
        <div className="product-image">
          <img src={props.imgUrl} alt="" width="200px" />
        </div>
        <p className="card-desc">{props.description}</p>
        <p>{props.rating}</p>
      </div>
    </div>
  );
}
