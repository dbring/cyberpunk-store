import { useContext } from "react";
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
  const { name, src, price } = product;
  const { handleAddToCartButtonClick } = useContext(CartContext);

  const addToCart = () => handleAddToCartButtonClick(product);

  return (
    <ProductCardContainer>
      <img src={src} alt={name} />
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
