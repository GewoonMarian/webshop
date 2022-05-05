import "./FavoritesCard.css";
export default function FavoritesCard({ item, unWish }) {
  return (
    <div className="fav-container">
      <div className="products">
        <div>
          <img
            src={item.mainImage}
            style={{ height: "170px", width: "170px" }}
            alt="fav prod"
          />
        </div>
        <div>
          <h3>{item.description}</h3>
        </div>
        <div>
          <button
            style={{ color: "white", background: "red" }}
            onClick={() => unWish(item)}
          >
            <strong>Remove</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
