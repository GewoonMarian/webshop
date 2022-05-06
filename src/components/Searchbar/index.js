import axios from "axios";
import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ?limit=5&offset=0
export default function Searchbar() {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter((product) => {
    if (!product.title) return null;
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      {!loading && filteredProducts.length !== 0 && search.length ? (
        <div style={{ position: "relative" }}>
          <ul className="results-container">
            {filteredProducts.map((p) => (
              <li className="result-item">
                <div style={{ display: "flex" }}>
                  <Link to={`/details/${p.id}`}>
                    <div>
                      <img src={p.mainImage} width="50px" />
                    </div>
                    <div>{p.title}</div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          Hello
        </div>
      ) : null}
    </div>
  );
}
