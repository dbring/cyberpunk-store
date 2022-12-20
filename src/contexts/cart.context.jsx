import { createContext, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCartDropdown = () => setIsOpen(!isOpen);

  return (
    <CartContext.Provider value={{ isOpen, toggleCartDropdown }}>
      {children}
    </CartContext.Provider>
  );
};
