import { useState } from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { IncomeCheckBox, ExpenseCheckBox } from "./CheckBox";
import { useTheme } from "../context/ThemeContext";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(true);
  const { addTransaction, editTransaction, selectedTransaction } =
    useContext(GlobalContext);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (selectedTransaction) {
      setText(selectedTransaction.text);
      setAmount(Math.abs(selectedTransaction.amount));
      setIsIncome(selectedTransaction.amount >= 0);
    } else {
      setText("");
      setAmount(0);
      setIsIncome(true);
    }
  }, [selectedTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || amount <= 0) {
      alert("Please fill up the form with valid inputs!");
      return;
    }

    // Ensure that the amount starts with a non-zero digit
    if (amount.toString().charAt(0) === "0") {
      alert("Amount should not start with 0!");
      return;
    }

    if (text.trim() !== "" && amount !== 0) {
      const newTransaction = {
        id: selectedTransaction ? selectedTransaction.id : Math.random(),
        text,
        amount: isIncome ? +amount : -amount,
      };
      if (selectedTransaction) {
        editTransaction(selectedTransaction.id, newTransaction);
      } else {
        addTransaction(newTransaction);
      }
      setAmount(0);
      setText("");
      setIsIncome(true);
    } else {
      alert("Please fill up the form!");
      return;
    }
  };

  return (
    <>
      <h3 className="text-3xl font-bold">Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            className={`block w-full p-2 border border-gray-300 rounded shadow-lg my-1 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
            }`}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            className={`block w-full p-2 border border-gray-300 rounded shadow-lg my-1 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
            }`}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <IncomeCheckBox
          className="plus my-1"
          isIncome={isIncome}
          setIsIncome={setIsIncome}
        />
        <ExpenseCheckBox
          className="minus my-1"
          isIncome={isIncome}
          setIsIncome={setIsIncome}
        />

        <div className="flex justify-center">
          <button className=" mx-auto w-20 h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 px-4 rounded">
            {selectedTransaction ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
