import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/CategoryPreview/category-preview.component";
import { Spinner } from "../../components/Spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import { ParagraphPreview } from "./categories-preview.styles";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      <ParagraphPreview>
        The Tyrell Corporation focuses on the creation and maintenance of
        artificial life. These beings are called replicants. A replicant is the
        way of the future. Not just a robot, but truly a being with intelligence
        making decisions, replicants can handle day to day tasks so that you may
        live your life in luxury and splendor.
      </ParagraphPreview>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </>
  );
};
