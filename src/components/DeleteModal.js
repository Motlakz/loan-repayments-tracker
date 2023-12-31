import React from 'react';

const DeleteModal = ({ showDeleteModal, confirmDelete, cancelDelete }) => {
    return (
        showDeleteModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="modal animate__animated animate__bounceIn max-w-md w-full p-4 bg-white rounded-md">
                    <div class="modal-content p-8">
                        <h2 class="text-2xl font-extrabold mb-4 text-gray-800">Delete Confirmation</h2>
                        <p class="mb-4 text-gray-600">Are you sure you want to delete this item?</p>
                        <div class="flex justify-between">
                            <button class="confirm w-1/2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mr-2" onClick={confirmDelete}>
                                Confirm
                            </button>
                            <button class="cancel w-1/2 bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-500 ml-2" onClick={cancelDelete}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default DeleteModal;
