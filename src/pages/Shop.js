import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductCard";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get(
      "http://localhost:4000/products?limit=5&offset=0"
    );

    setProducts(response.data.rows);
  }

  useEffect(() => {
    getProducts();
  }, []);
  // console.log(products);
  return (
    <div>
      <div className="card-container">
        <h4 className="h4-font">Categories</h4>
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
