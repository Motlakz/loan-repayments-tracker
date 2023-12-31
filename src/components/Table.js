import React, { useState } from "react";

const Table = ({ expenses, calculateRemainingAmount, openEditModal, deleteExpense }) => {
    const [files, setFiles] = useState(Array(expenses.length).fill(null));

    const handleFileChange = (index, event) => {
        const fileInput = event.target;
        const selectedFile = fileInput.files[0];

        // Update the file array with the new file at the specified index
        setFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles[index] = selectedFile;
            return newFiles;
        });
    };

    const handleFileDelete = (index) => {
        // Update the file array to remove the file at the specified index
        setFiles((prevFiles) => {
          const newFiles = [...prevFiles];
          newFiles[index] = null;
          return newFiles;
        });
      
        // Reset the input value
        const fileInput = document.getElementById(`file-${index}`);
        if (fileInput) {
          fileInput.value = "";
        }
    };      

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
                        <th className="border border-purple-500 p-2">Invoice</th>
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
                        <td className="border-r border-b border-gray-500 p-4">
                            <button className="bg-opacity-50 cursor-not-allowed bg-blue-500 text-white px-2 py-1 mr-2 w-full">
                                Edit
                            </button>
                            <button className="bg-opacity-50 cursor-not-allowed bg-red-500 text-white px-2 py-1 w-full">Remove</button>
                        </td>
                        <td className="border-r border-b border-gray-500 p-4">
                            <div className="file-input-container">
                                <input
                                    type="file"
                                    name={`file-0`}
                                    id={`file-0`}
                                    className="custom-file-input border"
                                    onChange={(event) => handleFileChange(0, event)}
                                />
                            </div>
                            {files[0] && (
                                <div className="flex gap-2 mt-4">
                                    <button className="bg-purple-100 p-2 cursor-not-allowed" target="_blank" rel="noopener noreferrer">View</button>
                                    <button className="bg-purple-100 p-2 cursor-not-allowed" target="_blank" rel="noopener noreferrer">Download</button>
                                </div>
                            )}
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
                            <td className="border-r border-b border-purple-500 p-4">
                                <button
                                    onClick={() => openEditModal(index)}
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
                            <td className="border-r border-b border-purple-500 p-4">
                                <div className="file-input-container">
                                <input
                                    type="file"
                                    name={`file-${index + 1}`}
                                    id={`file-${index + 1}`}
                                    className="custom-file-input cursor-pointer border"
                                    onChange={(event) => handleFileChange(index + 1, event)}
                                />
                                </div>
                                {files[index + 1] && (
                                    <div className="flex gap-2 mt-4 animate__animated animate__zoomIn">
                                        <a href={URL.createObjectURL(files[index + 1])} target="_blank" rel="noopener noreferrer" className="text-purple-600 bg-purple-100 hover:bg-purple-600 hover:text-white p-2">
                                            View
                                        </a>
                                        <a href={URL.createObjectURL(files[index + 1])} download={`FileName-${index + 1}.pdf`} target="_blank" rel="noopener noreferrer" className="text-purple-600 bg-purple-100 hover:bg-purple-600 hover:text-white p-2">
                                            Download
                                        </a>
                                        <button
                                            onClick={() => handleFileDelete(index + 1)}
                                            className="text-purple-600 bg-purple-100 hover:bg-purple-600 hover:text-white p-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Table;
