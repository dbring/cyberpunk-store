import { FC } from "react";
import { Category } from "../../store/categories/categories.types";
import { ProductCard } from "../ProductCard/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
  ViewAllLink,
} from "./category-preview.styles";

type CategoryPreviewProps = {
  title: string;
  products: Category[];
};

export const CategoryPreview: FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      <h4>
        <ViewAllLink to={title}>View All {title.toUpperCase()} ❯</ViewAllLink>
      </h4>
    </CategoryPreviewContainer>
  );
};
