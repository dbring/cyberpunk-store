import HatsCategoryImage from "../../assets/hats-category.jpeg";
import JacketsCategoryImage from "../../assets/jackets-category.jpeg";
import MenCategoryImage from "../../assets/men-category.jpeg";
import SneakersCategoryImage from "../../assets/sneakers-category.jpeg";
import WomenCategoryImage from "../../assets/women-category.jpeg";
import { HomeItem } from "../HomeItem/home-item.component";
import { CategoriesContainer } from "./categories.styles";

const categories = [
  {
    id: 1,
    title: "punks",
    imageUrl: HatsCategoryImage,
  },
  {
    id: 2,
    title: "genesis",
    imageUrl: JacketsCategoryImage,
  },
  {
    id: 3,
    title: "security",
    imageUrl: SneakersCategoryImage,
  },
  {
    id: 4,
    title: "cityscapes",
    imageUrl: WomenCategoryImage,
  },
  {
    id: 5,
    title: "androids",
    imageUrl: MenCategoryImage,
  },
];

export const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <HomeItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
