import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./About.css";
function DetailsPage(props) {
  const { onAdd, onRemove } = props;
  const { onWish, unWish } = props;
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${params.id}`
        );
        const data = response.data;
        setProduct(data);
      } catch (exception) {
        console.error(exception.message);
      }
    };
    getData();
  }, [params.id]);

  const submitComment = () => {
    setComment([...comment, input]);
    setInput(" ");
  };

  if (product) {
    return (
      <div className="about-container">
        <div className="about-prod">
          <div>
            <h2 className="productTitle">{product.title}</h2>
            <div className="photo">
              <h3>
                <img
                  src={product.mainImage}
                  style={{ height: "200px", width: "200px" }}
                  alt="products"
                />
              </h3>
            </div>
            <div>
              <button
                style={{ color: "white", background: "green" }}
                onClick={() => onAdd(product)}
              >
                <strong>Add To Cart</strong>
              </button>
              <button
                style={{ color: "white", background: "red" }}
                onClick={() => onRemove(product)}
              >
                <strong>Remove from Cart</strong>
              </button>
            </div>

            <div>
              <button
                style={{ color: "white", background: "green" }}
                onClick={() => onWish(product)}
              >
                <strong>Add to WishList</strong>
              </button>
              <button
                style={{ color: "white", background: "red" }}
                onClick={() => unWish(product)}
              >
                <strong>Remove from WishList</strong>
              </button>
            </div>

            <div className="description">
              <h1>€{product.price}</h1>
              <h4>{product.description}</h4>
            </div>
          </div>
        </div>
        <p>:: Leave your review :: {comment.length} ::</p>
        <ul>
          {comment.map((c) => (
            <li>{c}</li>
          ))}
        </ul>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitComment}>Leave your comment</button>
      </div>
    );
  } else {
    return <p>Loading... </p>;
  }
}

export default DetailsPage;
