import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({ item }) => {
  const { handleAddToCartButtonClick, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => handleAddToCartButtonClick(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10005;
      </span>
    </div>
  );
};
