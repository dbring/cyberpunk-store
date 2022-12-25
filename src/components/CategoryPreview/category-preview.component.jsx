import { ProductCard } from "../ProductCard/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.styles";

export const CategoryPreview = ({ title, products }) => {
  console.log(products);
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
    </CategoryPreviewContainer>
  );
};
