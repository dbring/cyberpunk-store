import { AnyAction } from "redux";
import { setCartItems, setIsOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export type CartState = {
  readonly isOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsOpen.match(action)) {
    return {
      ...state,
      isOpen: action.payload,
    };
  }

  return state;
};
