import { useState } from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction, editTransaction, selectedTransaction } =
    useContext(GlobalContext);

  useEffect(() => {
    if (selectedTransaction) {
      setText(selectedTransaction.text);
      setAmount(selectedTransaction.amount);
    } else {
      setText("");
      setAmount(0);
    }
  }, [selectedTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: selectedTransaction ? selectedTransaction.id : Math.random(),
      text,
      amount: +amount,
    };
    if (selectedTransaction) {
      editTransaction(selectedTransaction.id, newTransaction);
    } else {
      addTransaction(newTransaction);
    }
    setAmount(0);
    setText("");
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
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          {selectedTransaction ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
