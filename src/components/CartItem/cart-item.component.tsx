import { FC, memo } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.types";
import { CurrencySymbol } from "../CurrencySymbol/currency-symbol";
import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

export const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, price, src, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={src} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x <CurrencySymbol />
          {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});
