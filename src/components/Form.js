import React from "react";

const Form = ({
  newExpense,
  newInitialAmount,
  newAmountReduced,
  newDeductionDate,
  newAnnualInterestRate,
  handleInputChange,
  addExpense,
  clearForm,
  saveExpense,
  isSaveDisabled,
  isClearDisabled,
  isAddExpenseDisabled,
  validation,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
    >
      <input
        type="text"
        className={`border rounded-md focus:outline-gray-300 p-2 ${
          !validation.expense ? "border-red-500" : ""
        }`}
        placeholder="Expense Title"
        value={newExpense}
        onChange={(e) => handleInputChange("expense", e.target.value)}
      />
      <input
        type="number"
        className={`border rounded-md focus:outline-gray-300 p-2 ${
          !validation.initialAmount ? "border-red-500" : ""
        }`}
        placeholder="Initial Amount"
        value={newInitialAmount}
        onChange={(e) => handleInputChange("initialAmount", e.target.value)}
      />
      <input
        type="number"
        className={`border rounded-md focus:outline-gray-300 p-2 ${
          !validation.amountReduced ? "border-red-500" : ""
        }`}
        placeholder="Amount Deducted Monthly"
        value={newAmountReduced}
        onChange={(e) => handleInputChange("amountReduced", e.target.value)}
      />
      <input
        type="date"
        className={`border rounded-md focus:outline-gray-300 text-gray-400 uppercase p-2 ${
          !validation.deductionDate ? "border-red-500" : ""
        }`}
        placeholder="Deduction Date"
        value={newDeductionDate}
        onChange={(e) => handleInputChange("deductionDate", e.target.value)}
      />
      <input
        type="number"
        className={`border rounded-md focus:outline-gray-300 p-2 ${
          !validation.annualInterestRate ? "border-red-500" : ""
        }`}
        placeholder="Annual Interest Rate (%)"
        value={newAnnualInterestRate}
        onChange={(e) =>
          handleInputChange("annualInterestRate", e.target.value)
        }
      />
      <button
        className={`bg-purple-500 rounded-md hover:bg-purple-700 hover:text-pink-100 text-white px-4 py-2 ${
          isAddExpenseDisabled
            ? "cursor-not-allowed opacity-50 hover:bg-purple-500 hover:text-pink-100 hover:bg-opacity-50"
            : ""
        }`}
        onClick={addExpense}
        disabled={isAddExpenseDisabled}
      >
        Add Expense
      </button>
      <button
        className={`bg-purple-200 rounded-md text-purple-600 hover:bg-pink-100 hover:text-pink-700 px-4 py-2 ${
          isClearDisabled
            ? "cursor-not-allowed opacity-50 hover:bg-purple-200 hover:text-purple-600 hover:bg-opacity-50"
            : ""
        }`}
        onClick={clearForm}
        disabled={isClearDisabled}
      >
        Clear Form
      </button>
      <button
        className={`bg-teal-500 rounded-md hover:bg-teal-700 hover:text-pink-200 text-white px-4 py-2 ${
          isSaveDisabled ? "cursor-not-allowed opacity-50 hover:bg-opacity-60 hover:text-white" : ""
        }`}
        onClick={saveExpense}
        disabled={isSaveDisabled}
      >
        Save Changes
      </button>
    </form>
  );
};

export default Form;
