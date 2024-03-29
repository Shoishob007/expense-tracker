/* eslint-disable react/prop-types */

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useTheme } from "../context/ThemeContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction, setSelectedTransaction } =
    useContext(GlobalContext);
  const { darkMode } = useTheme();

  const sign = transaction.amount < 0 ? "-" : "+";

  const handleEditClick = () => {
    setSelectedTransaction(transaction);
  };

  return (
    <>
      <li
        className={`border border-gray-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        } shadow-lg flex justify-between p-2`}
      >
        <span className="w-1/4">{transaction.text}</span>

        <span className="w-1/2 text-center">
          <span
            className={
              transaction.amount < 0 ? "text-red-500" : "text-green-500"
            }
          >
            {sign}
            {Math.abs(transaction.amount)} BDT
          </span>
        </span>

        <div className="w-1/4 flex justify-end gap-1 items-center">
          <button
            className="edit-btn text-white bg-blue-500 text-xs rounded-sm px-1 py-0.5"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button
            className="delete-btn text-white bg-red-500 text-xs rounded-sm px-1 py-0.5"
            onClick={() => deleteTransaction(transaction.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default Transaction;
