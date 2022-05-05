import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

// ?limit=5&offset=0
export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:4000/products?limit=${productsPerPage}&offset=${offset}`
    );
    setLoading(false);
    setProducts([products, ...response.data.rows]);
  }

  useEffect(() => {
    getProducts();
  }, [offset]);

  return (
    <div>
      <div className="card-container">
        <h3>All Products available for you!</h3>
      </div>
      {loading && <div>...loading</div>}
      <div>
        {!loading && products.length !== 0 ? (
          products.map((p) => {
            if (!p.title) return null;
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
        ) : (
          <div>No more items</div>
        )}
        <div>
          <Pagination
            offset={offset}
            setOffset={setOffset}
            productPerPage={productsPerPage}
            amountOfProducts={products.length}
          />
        </div>
      </div>
    </div>
  );
}
