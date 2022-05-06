import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ShopProduct.css";
const URI = " http://localhost:4000/categories/";

export default function HouseDetails() {
  const param = useParams();
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URI + param.id);
        const data = response.data;
        console.log("first", data);
        setCategory(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [param.id]);

  if (category) {
    return (
      <div className="cat-prod">
        <div
          style={{
            color: "red",
            border: "2px solid green",
            backgroundColor: "lightgray",
          }}
        >
          <div className="tit-cat">
            <h1>{category.title}</h1>
          </div>

          <div className="details-prod">
            <div>
              <div className="cat-imag">
                <img src={category.imgUrl} alt="" width={"600px"}></img>
              </div>
              <div className="prod-tit">
                <h2>Products</h2>
              </div>

              {category.products.map((product) => {
                return (
                  <p key={product.id}>
                    <Link to={`/details/${product.id}`}>
                      <div className="prod-img">
                        {product.title}
                        <img
                          src={product.mainImage}
                          width="200px"
                          alt={product.name}
                        />
                      </div>
                    </Link>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
