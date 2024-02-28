import React, { useState } from "react";
import SignUpForm from "./SignUpForm";

function SignUpModal({ onClose }) {
    const [isModalOpen, setModalOpen] = useState(true);

    const openModal = (modal) => {
        modal.style.display = "flex";
        modal.classList.remove('slit-out-hr');
        modal.classList.add('slit-in-vr');
    };

    const closeModal = (modal) => {
        modal.classList.remove('slit-in-vr');
        modal.classList.add('slit-out-hr');

        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove('slit-out-hr');
            onClose();
        }, 800);
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="bg-opacity-50 bg-black absolute inset-0"></div>
            <div
                className={`modal bg-purple-100 rounded-lg z-10 w-full max-w-4xl ${isModalOpen ? 'slit-in-vr' : 'slit-out-hr'} mt-20 mb-20 relative`}
                ref={(modal) => { if (modal) isModalOpen ? openModal(modal) : closeModal(modal); }}
                >
                <span className="absolute top-2 right-2 z-20 text-purple-600 hover:text-purple-800 bg-white rounded-lg px-2 py-1 cursor-pointer text-xl" onClick={() => setModalOpen(false)}>
                    <i className="bi bi-x-square"></i>
                </span>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUpModal;
