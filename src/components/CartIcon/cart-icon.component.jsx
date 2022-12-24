import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingBagIcon,
} from "./cart-icon.styles";

export const CartIcon = () => {
  const { toggleCartDropdown, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingBagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
