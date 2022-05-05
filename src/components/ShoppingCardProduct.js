import "./ShoppingCardProduct.css";
export default function ShoppingCardProduct({ item, onRemove }) {
  return (
    <div className="prod-container">
      <div className="products">
        <h3 className="title">{item.title}</h3>
        <img
          src={item.mainImage}
          style={{ height: "200px", width: "200px" }}
          alt="prod"
        />

        <h4 className="desc">{item.description}</h4>

        <div className="amount">
          <div>Quantity</div>
          <div>{item.qty}</div>
        </div>
        <div>
          <div style={{ color: "green" }}>
            <strong>Total Price €</strong> {item.price * item.qty}
          </div>

          <div>
            <button
              style={{ color: "white", background: "red" }}
              onClick={() => onRemove(item)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
