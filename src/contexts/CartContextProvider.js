import React, { createContext, useContext, useReducer } from "react";

const cartContext = createContext();
export const useCart = () => {
  return useContext(cartContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return <cartContext.Provider>{children}</cartContext.Provider>;
};

export default CartContextProvider;
