import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../store/cart/cart.action";
import { selectCartCount, selectIsOpen } from "../../store/cart/cart.selector";
import {
  CartIconContainer,
  ItemCount,
  ShoppingBagIcon,
} from "./cart-icon.styles";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCartDropdown = () => dispatch(setIsOpen(!isOpen));

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingBagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
