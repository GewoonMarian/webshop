export default function ShoppingCardProduct({ item, onRemove }) {
  return (
    <div>
      <img
        src={item.mainImage}
        style={{ height: "200px", width: "200px" }}
        alt="prod"
      />

      <h>{item.title}</h>
      <h3>{item.description}</h3>

      <div>
        <div>Quantity</div>
        <div>{item.qty}</div>
      </div>
      <div>
        <div> € {item.price * item.qty}</div>

        <div>
          <button onClick={() => onRemove(item)}>Remove</button>
        </div>
      </div>
    </div>
  );
}
