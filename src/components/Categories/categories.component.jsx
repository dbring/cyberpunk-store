export const Categories = () => {
  const categories = [
    {
      title: "Hats",
      subtitle: "Shop Now",
      url: "/",
    },
    {
      title: "Jackets",
      subtitle: "Shop Now",
      url: "/",
    },
    {
      title: "Sneakers",
      subtitle: "Shop Now",
      url: "/",
    },
    {
      title: "Womens",
      subtitle: "Shop Now",
      url: "/",
    },
    {
      title: "Mens",
      subtitle: "Shop Now",
      url: "/",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        const { title, subtitle, url } = category;
        return (
          <div className="category-container" key={index}>
            <div className="background-image"></div>
            <img src={url} alt={title} />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
