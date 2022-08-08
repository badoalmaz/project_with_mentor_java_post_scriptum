import React, { useContext, useReducer, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = React.createContext();

export const useProducts = () => {
  return useContext(productContext);
}

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts()
  }

  const getProducts = async() => {
    const { data } = await axios(JSON_API_PRODUCTS);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    })
  }

  const deleteProduct = async(id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`)
    getProducts();
  }

  const values = {
    getProducts,
    addProduct,
    deleteProduct,
    products: state.products,
    productDetails: state.productDetails,
  }

  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;