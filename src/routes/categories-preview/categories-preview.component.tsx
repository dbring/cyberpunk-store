import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/CategoryPreview/category-preview.component";
import { Spinner } from "../../components/Spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import { ParagraphPreview } from "./categories-preview.styles";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      <ParagraphPreview>
        The Tyrell Corporation is pleased to introduce our line of replicants.
        These amazing beings are genetically engineered to be virtually
        identical to humans, with superior physical and mental abilities. Our
        replicants are designed to excel in a variety of tasks, making them the
        perfect choice for any organization looking to increase efficiency and
        productivity. Whether you need a replicant for manual labor, home
        security, or anything in between, we have a model that will suit your
        needs.
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

export default CategoriesPreview;
