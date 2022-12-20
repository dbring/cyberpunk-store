import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  itemsInCart: [],
  setItemsInCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);

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

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleCartDropdown,
        itemsInCart,
        handleAddToCartButtonClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
