import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 3,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (obj) => {
    dispatch({ type: "ADD", payload: obj });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const calcTotal = () => {
    dispatch({ type: "TOTALS" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        calcTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
