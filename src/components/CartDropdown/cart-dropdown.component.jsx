import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../Button/button.component";
import { CartItem } from "../CartItem/cart-item.component";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const { itemsInCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {itemsInCart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <Button onClick={() => navigate("/checkout")}>Checkout</Button>
    </div>
  );
};
