import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item, cant) => {
    const newItem = { ...item, cant };
    const newCart = [...cart];
    setCart([...cart, newItem]);
  };
  const contextFunction = () => console.log("Contexto Listo!");

  return (
    <Provider value={{ contextFunction, cart, addToCart }}>{children}</Provider>
  );
}

export default useCartContext;
