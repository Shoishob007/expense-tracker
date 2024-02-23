/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction, setSelectedTransaction } =
    useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  const handleEditClick = () => {
    setSelectedTransaction(transaction);
  };

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}
          {Math.abs(transaction.amount)}$
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>

        <button className="edit-btn" onClick={handleEditClick}>
          i
        </button>
      </li>
    </>
  );
};

export default Transaction;
