import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CurrencySymbol } from "../CurrencySymbol/currency-symbol";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

export const CheckoutItem = ({ item }) => {
  const { handleAddToCartButtonClick, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { name, src, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={src} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => decreaseQuantity(item)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => handleAddToCartButtonClick(item)}>&#10095;</Arrow>
      </Quantity>
      <Price>
        <CurrencySymbol />
        {price}
      </Price>
      <RemoveButton onClick={() => removeItemFromCart(item)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
