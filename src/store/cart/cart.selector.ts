import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  )
);
export const selectIsOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isOpen
);
