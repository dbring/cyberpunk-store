import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  itemsInCart: [],
  setItemsInCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_IS_OPEN: "SET_IS_OPEN",
  SET_ITEMS_IN_CART: "SET_ITEMS_IN_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  if (type === CART_ACTION_TYPES.SET_IS_OPEN) {
    return {
      ...state,
      isOpen: payload,
    };
  } else if (type === CART_ACTION_TYPES.SET_ITEMS_IN_CART) {
    return {
      ...state,
      ...payload,
    };
  }

  throw new Error(`Error: ${type} in cartReducer`);
};

const INITIAL_STATE = {
  isOpen: false,
  itemsInCart: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isOpen, itemsInCart, cartCount, cartTotal } = state;

  const setIsOpen = () => {
    const newOpenState = !isOpen;
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_OPEN, newOpenState));
  };

  const setItemsInCart = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );

    const newCartCount = newCartItems.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_ITEMS_IN_CART, {
        itemsInCart: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const toggleCartDropdown = () => setIsOpen();

  const handleAddToCartButtonClick = (product) => {
    const copyOfItemsInCart = [...itemsInCart];

    // Check to see if item alread in cart
    for (let i = 0; i < itemsInCart.length; i++) {
      const { id, quantity } = itemsInCart[i];

      if (id !== product.id) continue;

      copyOfItemsInCart[i] = {
        ...copyOfItemsInCart[i],
        quantity: quantity + 1,
      };

      setItemsInCart(copyOfItemsInCart);
      return;
    }

    // If item not in cart, set quantity to 1 and add it to cart
    copyOfItemsInCart.push({ ...product, quantity: 1 });
    setItemsInCart(copyOfItemsInCart);
  };

  const removeItemFromCart = (item) => {
    const copyOfItemsInCart = [...itemsInCart];
    const filteredCart = copyOfItemsInCart.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setItemsInCart(filteredCart);
  };

  const decreaseQuantity = (item) => {
    const copyOfItemsInCart = [...itemsInCart];

    for (let i = 0; i < itemsInCart.length; i++) {
      const { id, quantity } = itemsInCart[i];

      if (id !== item.id) continue;

      copyOfItemsInCart[i] = {
        ...copyOfItemsInCart[i],
        quantity: quantity - 1,
      };

      setItemsInCart(copyOfItemsInCart);
      if (copyOfItemsInCart[i].quantity === 0) removeItemFromCart(item);
      return;
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleCartDropdown,
        itemsInCart,
        handleAddToCartButtonClick,
        cartCount,
        cartTotal,
        decreaseQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
