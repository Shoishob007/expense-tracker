/* eslint-disable react/prop-types */
export const IncomeCheckBox = ({ className, isIncome, setIsIncome }) => {
  const handleInputChange = () => {
    setIsIncome(true);
  };

  return (
    <div className="form-control">
      <label>
        <input
          type="checkbox"
          className={className}
          checked={isIncome}
          onChange={handleInputChange}
        />
        Income
      </label>
    </div>
  );
};

export const ExpenseCheckBox = ({ className, isIncome, setIsIncome }) => {
  const handleInputChange = () => {
    setIsIncome(false);
  };

  return (
    <div className="form-control">
      <label>
        <input
          type="checkbox"
          className={className}
          checked={!isIncome}
          onChange={handleInputChange}
        />
        Expense
      </label>
    </div>
  );
};
