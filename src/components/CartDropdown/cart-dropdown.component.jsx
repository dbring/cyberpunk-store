import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../Button/button.component";
import { CartItem } from "../CartItem/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
  const { itemsInCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {itemsInCart.length ? (
          itemsInCart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={() => navigate("/checkout")}>Checkout</Button>
    </CartDropdownContainer>
  );
};
