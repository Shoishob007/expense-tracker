import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

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
      <div className="inc-exp-container bg-white shadow-lg p-5 flex justify-between my-5">
        <div>
          <h4 className="text-lg uppercase">Income</h4>
          <p className="money text-xl plus">${income}</p>
        </div>
        <div>
          <h4 className="text-lg uppercase">Expense</h4>
          <p className="money text-xl minus">${expense}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
