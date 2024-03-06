import React, { useState } from 'react';
import SignUpModal from './SignUpModal';

function Header() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openSignUpModal = () => {
        setModalOpen(true);
    };

    const closeSignUpModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <header className="min-h-screen flex items-center justify-start bg-cover">
                <article className="p-8 text-cyan-700">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Repay Smart</h1>
                    <p className="max-w-2xl text-2xl text-cyan-600">Your all-in-one solution for effortless personal finance management. Take control of your finances and make informed decisions with <span className="text-cyan-500 font-semibold">Repay Smart</span>.</p>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md w-64 mt-6" onClick={openSignUpModal}>
                        Let's Get Saving!
                    </button>
                </article>
            </header>
            {isModalOpen && <SignUpModal onClose={closeSignUpModal} />}
        </>
    )
}

export default Header;
