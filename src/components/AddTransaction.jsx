import { useState } from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(true);
  const { addTransaction, editTransaction, selectedTransaction } =
    useContext(GlobalContext);

  useEffect(() => {
    if (selectedTransaction) {
      setText(selectedTransaction.text);
      setAmount(selectedTransaction.amount);
      setIsIncome(selectedTransaction.amount >= 0);
    } else {
      setText("");
      setAmount(0);
      setIsIncome(true);
    }
  }, [selectedTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>

        <div className="form-control">
          <label>
            <input
              type="checkbox"
              className="plus"
              checked={isIncome}
              onChange={() => setIsIncome(!isIncome)}
            />
            Income
          </label>
        </div>

        <div className="form-control">
          <label>
            <input
              type="checkbox"
              className="minus"
              checked={!isIncome}
              onChange={() => setIsIncome(!isIncome)}
            />
            Expense
          </label>
        </div>
        <button className="btn" type="submit">
          {selectedTransaction ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
