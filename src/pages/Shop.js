import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductCard";

// ?limit=5&offset=0
export default function ShopPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get(
      "http://localhost:4000/products?limit=5&offset=0"
    );
    console.log("first", response.data);
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);

  return (
    <div>
      <div className="card-container">
        <h3 className="h4-font">All Products available for you!</h3>
      </div>
      <div>
        {products
          ? products.map((p) => {
              return (
                <ProductsCard
                  key={p.id}
                  title={p.title}
                  price={p.price}
                  rating={p.rating}
                  imgUrl={p.mainImage}
                  description={p.description}
                  id={p.id}
                />
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}
