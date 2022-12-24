import { useContext } from "react";
import { CheckoutItem } from "../../components/CheckoutItem/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

export const Checkout = () => {
  const { itemsInCart, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {itemsInCart.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}

      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};
