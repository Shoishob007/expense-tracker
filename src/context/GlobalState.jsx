/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer.jsx";

const initialState = {
  transactions: [],
  selectedTransaction: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  const [state, dispatch] = useReducer(AppReducer, {
    transactions: transactions,
    selectedTransaction: null,
  });
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function editTransaction(id, updatedTransaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: { id, updatedTransaction },
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        selectedTransaction,
        setSelectedTransaction,
        addTransaction,
        editTransaction,
        deleteTransaction,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
