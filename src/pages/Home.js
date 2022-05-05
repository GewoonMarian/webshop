import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HomeCard from "../components/HomeCard/index";
import "./Home.css";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/categories");

        console.log("categoreis fetched: ", response.data);
        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) return <div>loading...</div>;

  return (
    <div className="home">
      {categories.map((category) => {
        const { id, title, imgUrl } = category;
        return <HomeCard key={id} id={id} title={title} imgUrl={imgUrl} />;
      })}
    </div>
  );
}
