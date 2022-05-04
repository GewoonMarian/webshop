export default function FavoritesCard({ item, unWish }) {
  return (
    <div>
      <div>
        <img
          src={item.mainImage}
          style={{ height: "170px", width: "170px" }}
          alt="fav prod"
        />
      </div>
      <div>
        <h3>{item.title}</h3>
        <h3>{item.description}</h3>
      </div>

      <div>
        <button onClick={() => unWish(item)}>Remove</button>
      </div>
    </div>
  );
}
