import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.cant += cant;
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };
  const isInCart = (id) => {
    return cart.some((itemCart) => itemCart.id === id);
  };
  const deleteCart = () => {
    setCart([]);
  };
  const contextFunction = () => console.log("Contexto Listo!");
  const cantInCart = () => {
    const total = 0;
    cart.forEach((item) => total);
    return total;
  };
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.cant;
    });
    return total;
  };

  return (
    <Provider
      value={{
        contextFunction,
        cart,
        addToCart,
        removeFromCart,
        deleteCart,
        cantInCart,
        totalPrice,
      }}
    >
      {children}
    </Provider>
  );
}

export default useCartContext;
