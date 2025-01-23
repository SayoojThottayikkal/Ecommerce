import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  cart_data: {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart_data.cartItems));
  }, [state.cart_data.cartItems]);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
