import "./home-item.styles.scss";

export const HomeItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="home-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
