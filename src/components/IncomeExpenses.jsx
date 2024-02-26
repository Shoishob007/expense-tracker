import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useTheme } from "../context/ThemeContext";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const { darkMode } = useTheme();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div
        className={`inc-exp-container rounded-sm shadow-lg p-5 flex justify-between my-5 ${
          darkMode
            ? "bg-gray-800 text-white border-2 border-dotted"
            : "bg-white text-gray-700"
        }`}
      >
        <div>
          <h4 className="text-lg uppercase">Income</h4>
          <p className="money text-xl plus text-green-500">{income} BDT</p>
        </div>
        <div>
          <h4 className="text-lg uppercase">Expense</h4>
          <p className="money text-xl minus text-red-500">{expense} BDT</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
