import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  handleAddToCartButtonClick,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import { CurrencySymbol } from "../CurrencySymbol/currency-symbol";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  item: CartItem;
};

export const CheckoutItem: FC<CheckoutItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { name, src, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);

  const decreaseCartQuantity = () =>
    dispatch(decreaseQuantity(cartItems, item));

  const addToCart = () => dispatch(handleAddToCartButtonClick(cartItems, item));

  const removeFromCart = () => dispatch(removeItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={src} alt={name} />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decreaseCartQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addToCart}>&#10095;</Arrow>
      </Quantity>
      <Price>
        <CurrencySymbol />
        {price}
      </Price>
      <RemoveButton onClick={removeFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
