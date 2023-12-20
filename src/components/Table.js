import React from "react";

const Table = ({ expenses, calculateRemainingAmount, editExpense, deleteExpense }) => {

    return (
        <section className="overflow-x-auto animate__animated animate__fadeInUp">
            <table className="w-full table-auto">
            <caption className="font-semibold mb-2">Monthly Repayments Table</caption>
            <thead>
                <tr className="bg-purple-200">
                <th className="border border-purple-500 p-2">Title</th>
                <th className="border border-purple-500 p-2">Initial Amount</th>
                <th className="border border-purple-500 p-2">Amount Deducted per Month</th>
                <th className="border border-purple-500 p-2">Deduction Date</th>
                <th className="border border-purple-500 p-2">Annual Interest Rate (%)</th>
                <th className="border border-purple-500 p-2">Remaining Amount per Year</th>
                <th className="border border-purple-500 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-gray-400">
                <td className="border border-gray-500 p-2">My Expense</td>
                <td className="border border-gray-500 p-2">1700000</td>
                <td className="border border-gray-500 p-2">14000</td>
                <td className="border border-gray-500 p-2">2023-12-18</td>
                <td className="border border-gray-500 p-2">5</td>
                <td className="border border-gray-500 p-2">
                    {calculateRemainingAmount(1700000, 14000, "2023-12-18", 5)}
                </td>
                <td className="border-r border-b border-gray-500 p-4 flex gap-1 justify-evenly lg:flex-row flex-col">
                    <button className="bg-opacity-50 bg-blue-500 text-white px-2 py-1 mr-2 w-full">
                    Edit
                    </button>
                    <button className="bg-opacity-50 bg-red-500 text-white px-2 py-1 w-full">Remove</button>
                </td>
                </tr>
                {expenses.map((expense, index) => (
                <tr key={index} className="animate__animated animate__fadeInDown">
                    <td className="border border-purple-500 p-2">{expense.title}</td>
                    <td className="border border-purple-500 p-2">{expense.initialAmount.toFixed(2)}</td>
                    <td className="border border-purple-500 p-2">{expense.amountReduced.toFixed(2)}</td>
                    <td className="border border-purple-500 p-2">{expense.deductionDate}</td>
                    <td className="border border-purple-500 p-2">{expense.annualInterestRate}</td>
                    <td className="border border-purple-500 p-2">
                    {calculateRemainingAmount(
                        expense.initialAmount,
                        expense.amountReduced,
                        expense.deductionDate,
                        expense.annualInterestRate
                    )}
                    </td>
                    <td className="border-r border-b border-purple-500 p-4 flex justify-evenly lg:flex-row flex-col">
                        <button
                            onClick={() => editExpense(index)}
                            className="bg-blue-500 hover:bg-blue-600 hover:text-white text-indigo-100 px-2 py-1 mr-2 w-full"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteExpense(index)}
                            className="bg-red-500 hover:bg-red-600 hover:text-pink-200 text-white px-2 py-1 w-full"
                        >
                            Remove
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Table;