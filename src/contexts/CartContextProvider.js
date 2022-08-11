import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import { getCountProductsInCart } from "../helpers/functions";

const cartContext = createContext();
export const useCart = () => {
  return useContext(cartContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );

      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {};

  return <cartContext.Provider>{children}</cartContext.Provider>;
};

export default CartContextProvider;
