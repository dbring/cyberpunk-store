import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/CategoryPreview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import "./categories-preview.styles.scss";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </>
  );
};
