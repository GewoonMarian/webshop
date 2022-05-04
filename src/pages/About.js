import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage(props) {
  const { onAdd, onRemove } = props;
  const { onWish, unWish } = props;
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${params.id}`
        );
        const data = response.data;
        console.log(data);
        setProduct(data);
      } catch (exception) {
        console.log(exception.message);
      }
    };
    getData();
  }, [params.id]);

  if (product) {
    return (
      <div>
        <h4 className="productTitle">{product.title}</h4>
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
          <button onClick={() => onAdd(product)}>Add To Cart</button>
          <button onClick={() => onRemove(product)}>Remove from Cart</button>
        </div>

        <div>
          <button onClick={() => onWish(product)}>Add to WishList</button>
          <button onClick={() => unWish(product)}>Remove from WishList</button>
        </div>

        <div className="description">
          <h2>{product.title}</h2>
          <h1>€{product.price}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    );
  } else {
    return <p>Loading... </p>;
  }
}

export default DetailsPage;
