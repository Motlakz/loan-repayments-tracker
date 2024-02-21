import React from 'react';

function Header() {
    return (
        <>
            <header className="min-h-screen flex items-center justify-start bg-cover">
                <article className="p-8 text-cyan-400">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Repay Smart</h1>
                    <p className="max-w-2xl text-2xl text-cyan-400">Your all-in-one solution for effortless personal finance management. Take control of your finances and make informed decisions with <span className="text-cyan-300 font-semibold">Repay Smart</span>.</p>
                </article>
            </header>
        </>
    )
}

export default Header;
