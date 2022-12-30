import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const handleAddToCartButtonClick = (cartItems, itemToAdd) => {
  const copyOfCartItems = [...cartItems];

  // Check to see if item already in cart
  for (let i = 0; i < cartItems.length; i++) {
    const { id, quantity } = cartItems[i];

    if (id !== itemToAdd.id) continue;

    copyOfCartItems[i] = {
      ...copyOfCartItems[i],
      quantity: quantity + 1,
    };

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, copyOfCartItems);
  }

  // If item not in cart, set quantity to 1 and add it to cart
  copyOfCartItems.push({ ...itemToAdd, quantity: 1 });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, copyOfCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const copyOfCartItems = [...cartItems];

  const filteredCart = copyOfCartItems.filter(
    (cartItem) => cartItem.id !== itemToRemove.id
  );

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, filteredCart);
};

export const decreaseQuantity = (cartItems, itemToDecrease) => {
  const copyOfCartItems = [...cartItems];

  for (let i = 0; i < cartItems.length; i++) {
    const { id, quantity } = cartItems[i];

    if (id !== itemToDecrease.id) continue;

    copyOfCartItems[i] = {
      ...copyOfCartItems[i],
      quantity: quantity - 1,
    };

    if (copyOfCartItems[i].quantity === 0)
      return removeItemFromCart(cartItems, itemToDecrease);

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, copyOfCartItems);
  }
};

export const setIsOpen = (isOpen) => {
  return createAction(CART_ACTION_TYPES.SET_IS_OPEN, isOpen);
};
