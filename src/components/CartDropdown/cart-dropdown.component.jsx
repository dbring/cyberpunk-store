import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../Button/button.component";
import { CartItem } from "../CartItem/cart-item.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {itemsInCart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};
