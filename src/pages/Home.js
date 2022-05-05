import React from "react";
import { useState, useEffect, useParams } from "react";
import axios from "axios";
import HomeCard from "../components/HomeCard/index";

export default function Home() {
  const [category, setCategory] = useState([]);

  async function getProducts() {
    const response = await axios.get("http://localhost:4000/categories");
    console.log("first", response.data);
    setCategory(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {category
        ? category.map((c) => {
            return (
              <HomeCard
                key={c.id}
                title={c.title}
                id={c.id}
                imgUrl={c.imgUrl}
              />
            );
          })
        : "Loading..."}
    </div>
  );
}
