import FavoritesCard from "../components/FavoritesCard";

export default function Favorites(props) {
  const { unWish, favoriteItems, setFavoriteItems } = props;
  return (
    <div>
      {setFavoriteItems.length === 0 ? (
        <h2>You haven't added anything yet to your Wish List</h2>
      ) : (
        <div className="favorites-body">
          <div className="Favorites-Container">
            <div className="Header-favorites">
              <h3 className="Heading-favorites">Favorites list</h3>
              <button onClick={() => setFavoriteItems([])}>Remove all</button>
            </div>
            {favoriteItems.map((item, i) => (
              <FavoritesCard key={i} item={item} unWish={unWish} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
