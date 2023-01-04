import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/categories.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_OPEN,
  boolean
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const handleAddToCartButtonClick = (
  cartItems: CartItem[],
  itemToAdd: CategoryItem
) => {
  const copyOfCartItems = [...cartItems];

  // Check to see if item already in cart
  for (let i = 0; i < cartItems.length; i++) {
    const { id, quantity } = cartItems[i];

    if (id !== itemToAdd.id) continue;

    copyOfCartItems[i] = {
      ...copyOfCartItems[i],
      quantity: quantity + 1,
    };

    return setCartItems(copyOfCartItems);
  }

  // If item not in cart, set quantity to 1 and add it to cart
  copyOfCartItems.push({ ...itemToAdd, quantity: 1 });
  return setCartItems(copyOfCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  itemToRemove: CartItem
) => {
  const copyOfCartItems = [...cartItems];

  const filteredCart = copyOfCartItems.filter(
    (cartItem) => cartItem.id !== itemToRemove.id
  );

  return setCartItems(filteredCart);
};

export const decreaseQuantity = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
) => {
  const copyOfCartItems = [...cartItems];

  for (let i = 0; i < cartItems.length; i++) {
    const { id, quantity } = cartItems[i];

    if (id !== itemToDecrease.id) continue;

    copyOfCartItems[i] = {
      ...copyOfCartItems[i],
      quantity: quantity - 1,
    };

    if (copyOfCartItems[i].quantity === 0) {
      const filteredCart = copyOfCartItems.filter(
        (cartItem) => cartItem.id !== itemToDecrease.id
      );
      return setCartItems(filteredCart);
    }
  }

  return setCartItems(copyOfCartItems);
};

export const setIsOpen = withMatcher((isOpen: boolean): SetIsCartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_OPEN, isOpen);
});
