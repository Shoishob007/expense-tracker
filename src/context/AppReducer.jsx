// eslint-disable-next-line react-refresh/only-export-components
export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "EDIT_TRANSACTION":
      // eslint-disable-next-line no-case-declarations
      const newTransactions = state.transactions.map((transaction) =>
        transaction.id === action.payload.id
          ? { ...transaction, ...action.payload.updatedTransaction }
          : transaction
      );

      return { ...state, transactions: newTransactions };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
