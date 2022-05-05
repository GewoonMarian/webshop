import React from "react";
import ShoppingCardProduct from "../components/ShoppingCardProduct";
import "./ShoppingCart.css";
export default function ShoppingCart(props) {
  const { onRemove, setCartItems, cartItems } = props;
  // const [product, setProduct] = useState(null);
  // console.log("shopping cart", setCartItems);
  const totals = cartItems.reduce(
    (acc, product) => {
      // console.log("the acc", acc);
      const totalPrice =
        parseFloat(acc.totalPrice) +
        parseInt(product.qty) * parseFloat(product.price);
      const totalQty = acc.totalQty + parseInt(product.qty);
      return { totalPrice, totalQty };
    },
    { totalQty: 0, totalPrice: 0 }
  );

  return (
    <div>
      {setCartItems.length === 0 ? (
        <h2>You haven't added anything yet. Go shopping!</h2>
      ) : (
        <div>
          <div>
            <div>
              <h3>Shopping Cart</h3>
              <button
                style={{ color: "white", background: "red" }}
                onClick={() => setCartItems([])}
              >
                <strong>Remove all</strong>
              </button>
            </div>
            {cartItems.map((item, i) => (
              <ShoppingCardProduct key={i} item={item} onRemove={onRemove} />
            ))}

            <div className="total-container">
              <div className="total">
                <div>Sub-Total</div>
                <div>{totals.totalQty} items</div>
              </div>
              <div style={{ color: "green" }}>
                <strong>Total Items Price:</strong>⏩ €
                {totals.totalPrice.toFixed(2)}
              </div>
            </div>
            <button style={{ color: "yellow", background: "green" }}>
              <strong>Checkout</strong>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
