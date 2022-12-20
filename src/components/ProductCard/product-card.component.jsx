import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button } from "../Button/button.component";
import "./product-card.styles.scss";

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { handleAddToCartButtonClick } = useContext(CartContext);

  const addToCart = () => handleAddToCartButtonClick(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={addToCart}>Add to Cart</Button>
    </div>
  );
};
