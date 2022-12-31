import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/CheckoutItem/checkout-item.component";
import { CurrencySymbol } from "../../components/CurrencySymbol/currency-symbol";
import { PaymentForm } from "../../components/PaymentForm/payment-form.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
          <span>Credits</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}

      <Total>
        Credits Owing: <CurrencySymbol />
        {cartTotal}
      </Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};
