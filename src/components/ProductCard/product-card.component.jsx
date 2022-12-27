import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/button.component";
import { CurrencySymbol } from "../CurrencySymbol/currency-symbol";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

export const ProductCard = ({ product }) => {
  const { id, name, src, price, category: productCategory } = product;
  const { handleAddToCartButtonClick } = useContext(CartContext);
  const { category } = useParams();

  const addToCart = () => handleAddToCartButtonClick(product);

  // Need to link image only, and need to fix routing. Routes differently depending on shop/id or category/id => always want category/id. COnditional routing?
  return (
    <ProductCardContainer>
      <Link to={category ? id : `${productCategory}/${id}`}>
        <img src={src} alt={name} />
      </Link>
      <Footer>
        <Name>{name}</Name>
        <Price>
          <CurrencySymbol />
          {price}
        </Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={addToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};
