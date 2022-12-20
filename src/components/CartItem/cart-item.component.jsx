import "./cart-item.styles.scss";

export const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <span>
        {quantity} x ${price}
      </span>
    </div>
  );
};
