import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
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
          <img src={product.mainImage} alt="products" />
        </div>
        <button onClick={() => console.log("Add to cart!")}>Add To Cart</button>
        <div className="description">
          <h2>{product.title}</h2>
          <h1>{product.price}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    );
  } else {
    return <p>Loading... </p>;
  }
}

export default DetailsPage;
