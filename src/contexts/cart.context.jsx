import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  itemsInCart: [],
  setItemsInCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const numberOfItemsInCart = itemsInCart.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0
    );
    setCartCount(numberOfItemsInCart);
  }, [itemsInCart]);

  useEffect(() => {
    const newCartTotal = itemsInCart.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [itemsInCart]);

  const toggleCartDropdown = () => setIsOpen(!isOpen);

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
