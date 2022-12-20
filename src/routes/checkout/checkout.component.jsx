import { useContext } from "react";
import { CheckoutItem } from "../../components/CheckoutItem/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

export const Checkout = () => {
  const { itemsInCart, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {itemsInCart.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}

      <div className="total">Total: ${cartTotal}</div>
    </div>
  );
};
