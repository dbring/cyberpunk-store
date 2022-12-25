import { useContext } from "react";
import { CategoryPreview } from "../../components/CategoryPreview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview.styles.scss";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // the categories map is an array, so we will need to amend code accordingly
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
