import { useContext } from "react";
import { ProductCard } from "../../components/ProductCard/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.styles.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
