import HatsCategoryImage from "../../assets/hats-category.jpeg";
import JacketsCategoryImage from "../../assets/jackets-category.jpeg";
import MenCategoryImage from "../../assets/men-category.jpeg";
import SneakersCategoryImage from "../../assets/sneakers-category.jpeg";
import WomenCategoryImage from "../../assets/women-category.jpeg";
import { CategoryItem } from "../CategoryItem/category-item.component";
import "./categories.styles.scss";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: HatsCategoryImage,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: JacketsCategoryImage,
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: SneakersCategoryImage,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: WomenCategoryImage,
    },
    {
      id: 5,
      title: "mens",
      imageUrl: MenCategoryImage,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
