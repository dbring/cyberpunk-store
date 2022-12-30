import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === CART_ACTION_TYPES.SET_CART_ITEMS) {
    return {
      ...state,
      cartItems: payload,
    };
  } else if (type === CART_ACTION_TYPES.SET_IS_OPEN) {
    return {
      ...state,
      isOpen: payload,
    };
  }

  return state;
};
