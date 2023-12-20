import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import FlashMessage from "./FlashMessage";
import DeleteModal from "./DeleteModal";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [newInitialAmount, setNewInitialAmount] = useState("");
  const [newAmountReduced, setNewAmountReduced] = useState("");
  const [newDeductionDate, setNewDeductionDate] = useState("");
  const [newAnnualInterestRate, setNewAnnualInterestRate] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [flashMessage, setFlashMessage] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [validation, setValidation] = useState({
    expense: true,
    initialAmount: true,
    amountReduced: true,
    deductionDate: true,
    annualInterestRate: true,
  });

// Load expenses from local storage when the component mounts
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Save expenses to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]); // The effect runs whenever the expenses state changes

  const handleInputChange = (field, value) => {
    setValidation((prevValidation) => ({
      ...prevValidation,
      [field]: true,
    }));

    switch (field) {
      case "expense":
        setNewExpense(value);
        break;
      case "initialAmount":
        setNewInitialAmount(value);
        break;
      case "amountReduced":
        setNewAmountReduced(value);
        break;
      case "deductionDate":
        setNewDeductionDate(value);
        break;
      case "annualInterestRate":
        setNewAnnualInterestRate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const areInputsValid =
        newExpense.trim() !== "" &&
        newInitialAmount.trim() !== "" &&
        newAmountReduced.trim() !== "" &&
        newDeductionDate.trim() !== "" &&
        newAnnualInterestRate.trim() !== "";

        if (areInputsValid) {
        setValidation({
            expense: true,
            initialAmount: true,
            amountReduced: true,
            deductionDate: true,
            annualInterestRate: true,
        });
        setFlashMessage(null);

        if (editIndex === null) {
            addExpense();
        } else {
            saveExpense();
        }
    }
  };

    const addExpense = () => {
        const areInputsValid = validateInputs();

        if (areInputsValid) {
            const newExpenseItem = {
                title: newExpense,
                initialAmount: parseFloat(newInitialAmount),
                amountReduced: parseFloat(newAmountReduced),
                deductionDate: newDeductionDate,
                annualInterestRate: parseFloat(newAnnualInterestRate),
            };

            const updatedExpenses = [...expenses, newExpenseItem];
            saveExpensesToLocalStorage(updatedExpenses);

            setExpenses(updatedExpenses);

            clearForm();
            setFlashMessage({ type: 'success', message: 'Expense added successfully.' });
            setTimeout(() => setFlashMessage(null), 2000);
        }
    };

    const validateInputs = () => {
        const areInputsValid =
            newExpense.trim() !== '' &&
            newInitialAmount.trim() !== '' &&
            newAmountReduced.trim() !== '' &&
            newDeductionDate.trim() !== '' &&
            newAnnualInterestRate.trim() !== '';

        if (!areInputsValid) {
            setFlashMessage({ type: 'error', message: 'Please fill in all fields.' });
        }

        setValidation({
            expense: newExpense.trim() !== '',
            initialAmount: newInitialAmount.trim() !== '',
            amountReduced: newAmountReduced.trim() !== '',
            deductionDate: newDeductionDate.trim() !== '',
            annualInterestRate: newAnnualInterestRate.trim() !== '',
        });

        return areInputsValid;
    };

    const editExpense = (index) => {
        setEditIndex(index);
        const { title, initialAmount, amountReduced, deductionDate, annualInterestRate } = expenses[index];
        setNewExpense(title);
        setNewInitialAmount(initialAmount);
        setNewAmountReduced(amountReduced);
        setNewDeductionDate(deductionDate);
        setNewAnnualInterestRate(annualInterestRate);
    };

    const saveExpense = () => {
        if (newExpense.trim() !== '') {
            const updatedExpenses = [...expenses];
            updatedExpenses[editIndex] = {
                title: newExpense,
                initialAmount: parseFloat(newInitialAmount),
                amountReduced: parseFloat(newAmountReduced),
                deductionDate: newDeductionDate,
                annualInterestRate: parseFloat(newAnnualInterestRate),
            };
            saveExpensesToLocalStorage(updatedExpenses);

            setExpenses(updatedExpenses);
            setEditIndex(null);
            // Clear form fields after saving
            setNewExpense('');
            setNewInitialAmount('');
            setNewAmountReduced('');
            setNewDeductionDate('');
            setNewAnnualInterestRate('');
            setFlashMessage({ type: 'info', message: 'Changes saved successfully.' });
            clearForm();
            setTimeout(() => setFlashMessage(null), 1500);
        } else {
            setFlashMessage({ type: 'error', message: 'Please fill in the expense title.' });
        }
    };

    const saveExpensesToLocalStorage = (expenses) => {
        // Save expenses to local storage
        localStorage.setItem('expenses', JSON.stringify(expenses));
    };

    const deleteExpense = (index) => {
        setShowDeleteModal(true);
        setEditIndex(index);
    };

    const confirmDelete = () => {
        // Perform deletion and hide modal
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(editIndex, 1);
        setExpenses(updatedExpenses);
        setEditIndex(null);
        setShowDeleteModal(false);
        setFlashMessage({ type: 'info', message: 'Expense deleted successfully.' });
        setTimeout(() => setFlashMessage(null), 1500);
    };

    const cancelDelete = () => {
        // Cancel deletion and hide modal
        setShowDeleteModal(false);
    };

    const clearForm = () => {
        setNewExpense('');
        setNewInitialAmount('');
        setNewAmountReduced('');
        setNewDeductionDate('');
        setNewAnnualInterestRate('');
        setEditIndex(null);
    };
   
    const calculateRemainingAmount = (initialAmount, amountReduced, deductionDate, annualInterestRate) => {
        const monthsRemaining = 12; // Assuming monthly deductions for 12 months
        const totalDeduction = parseFloat(amountReduced) * monthsRemaining;
        const remainingAfterDeduction = parseFloat(initialAmount) - totalDeduction;
        const compoundInterest = (remainingAfterDeduction * (Math.pow(1 + annualInterestRate / 100, 1 / 12) - 1)).toFixed(2);
        return (remainingAfterDeduction + parseFloat(compoundInterest)).toFixed(2);
    };

    const isSaveDisabled = editIndex === null || newExpense.trim() === '';
    const isClearDisabled = !(
        newExpense || newInitialAmount || newAmountReduced || newDeductionDate || newAnnualInterestRate || editIndex !== null
    );
    const isAddExpenseDisabled = editIndex !== null;

    return (
        <div>
          <h2 className="text-xl font-semibold mb-4">Loan Repayments Tracker</h2>
          <Form
            newExpense={newExpense}
            newInitialAmount={newInitialAmount}
            newAmountReduced={newAmountReduced}
            newDeductionDate={newDeductionDate}
            newAnnualInterestRate={newAnnualInterestRate}
            handleInputChange={handleInputChange}
            addExpense={addExpense}
            clearForm={clearForm}
            saveExpense={saveExpense}
            isSaveDisabled={isSaveDisabled}
            isClearDisabled={isClearDisabled}
            isAddExpenseDisabled={isAddExpenseDisabled}
            validation={validation}
            handleSubmit={handleSubmit}
          />
          <Table
            expenses={expenses}
            calculateRemainingAmount={calculateRemainingAmount}
            editExpense={editExpense}
            deleteExpense={deleteExpense}
          />
          <FlashMessage flashMessage={flashMessage} />
          <DeleteModal
            showDeleteModal={showDeleteModal}
            confirmDelete={confirmDelete}
            cancelDelete={cancelDelete}
          />
        </div>
    );
};

export default ExpenseTracker;