import { CurrencySymbol } from "../CurrencySymbol/currency-symbol";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

export const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x <CurrencySymbol />
          {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
