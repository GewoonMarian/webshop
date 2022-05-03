import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import ShoppingCart from "./pages/ShoppingCart";
import { useState } from "react";
function App() {
  // Cart products...ADD and Remove
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (exist) {
      setCartItems(
        cartItems.map((productInCart) =>
          productInCart.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : productInCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) =>
          productInCart.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : product
        )
      );
    }
  };

  return (
    <div className="App">
      <NavBar />
      <h2>Welcome to the Marloes Shop</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop onAdd={onAdd} />} />
        <Route path="/details/:id" element={<About onAdd={onAdd} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/ShoppingCart"
          element={
            <ShoppingCart
              onRemove={onRemove}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
