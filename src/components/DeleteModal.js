import React from 'react';

const DeleteModal = ({ showDeleteModal, confirmDelete, cancelDelete }) => {
  return (
    showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg">
                <p className="mb-4">Are you sure you want to delete this expense?</p>
                <button className="bg-red-500 text-white px-4 py-2" onClick={confirmDelete}>Yes</button>
                <button className="bg-gray-300 text-black px-4 py-2 ml-4" onClick={cancelDelete}>No</button>
            </div>
        </div>
        )
    );
};

export default DeleteModal;
