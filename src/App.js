import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import ShoppingCart from "./pages/ShoppingCart";
function App() {
  return (
    <div className="App">
      <NavBar />
      <h2>Welcome to the Marloes Shop</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/details/:id" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
