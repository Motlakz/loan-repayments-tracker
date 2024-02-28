import React, { useEffect, useState } from "react";
import SignUpModal from "./SignUpModal";
import LoanTrackImg from "../assets/mortgage-loan-mortgage-svgrepo-com.svg";
import AlertIcon from "../assets/notification-svgrepo-com.svg";
import PlanSvg from "../assets/plan-svgrepo-com.svg";
import CalcIcon from "../assets/currency-calculator-svgrepo-com.svg";
import Lottie from 'react-lottie';

function MainSection() {
    const [animationData, setAnimationData] = useState(null);
    const [animationData2, setAnimationData2] = useState(null);
    const [animationData3, setAnimationData3] = useState(null);
    const [animationData4, setAnimationData4] = useState(null);
    const [animationData5, setAnimationData5] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isModalOpen, setModalOpen] = useState(false);

    const openSignUpModal = () => {
        setModalOpen(true);
    };

    const closeSignUpModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1240);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch('https://lottie.host/dec901fb-ef71-4cc6-972f-d885bdd82526/MfQbcaOcZ5.json')
            .then(response => response.json())
            .then(data => setAnimationData(data));

        fetch('https://lottie.host/c8406422-9111-4697-8f5f-d720b23610f0/lpM3swz4Kq.json')
            .then(response => response.json())
            .then(data => setAnimationData2(data));

        fetch('https://lottie.host/f6bcde76-f0a3-4cd4-9548-db7b1da2fea1/BpmQikMI7j.json')
            .then(response => response.json())
            .then(data => setAnimationData3(data));

        fetch('https://lottie.host/e729d18d-7b29-4df5-ad31-fcb4c5dbd125/hSRSlE953X.json')
            .then(response => response.json())
            .then(data => setAnimationData4(data));

        fetch('https://lottie.host/69cd8a72-612d-4fc6-b1f2-4b602c41b9f8/QDZBHaGrvy.json')
            .then(response => response.json())
            .then(data => setAnimationData5(data));
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'        
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true, 
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions3 = {
        loop: true,
        autoplay: true, 
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions4 = {
        loop: true,
        autoplay: true, 
        animationData: animationData4,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptions5 = {
        loop: true,
        autoplay: true, 
        animationData: animationData5,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section className="mt-16 p-8">
            <article>
                <h2 className="text-3xl font-bold text-center mb-6">We provide the coolest services!</h2>
            </article>
            <div className="cards grid grid-cols-4 gap-2">
                <div className="card flex items-center gap-4 p-4 rounded-lg border border-purple-500">
                    <figure>
                        <img src={LoanTrackImg} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                    <article>
                        <h2 className="font-bold text-lg">Loan Tracking</h2>
                    </article>
                </div>
                <div className="card flex items-center gap-4 p-4 border border-purple-600 rounded-lg">
                    <figure>
                        <img src={AlertIcon} className="max-w-24 max-h-24 w-full" alt="" />  
                    </figure>
                    <article>
                        <h2 className="text-lg font-bold">Reminders and Alerts</h2>
                    </article>
                </div>
                <div className="card flex items-center gap-4 p-4 border border-purple-600 rounded-lg">
                    <figure>
                        <img src={PlanSvg} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                    <article>
                        <h2 className="font-bold text-lg">Log your expense types</h2>
                    </article>
                </div>
                <div className="card flex items-center gap-4 p-4 border border-purple-600 rounded-lg">
                    <figure>
                        <img src={CalcIcon} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                    <article>
                        <h2 className="font-bold text-lg">Currency conversion, anyone?</h2>
                    </article>
                </div>
            </div>
            <section className="details mt-16 rounded-2xl p-8 bg-purple-200">
                <div className="content flex justify-around items-center pb-10">
                    <div className="animation border-2 border-purple-300 pb-4">
                    {animationData ? <Lottie options={{ ...defaultOptions, height: 400, width: 400 }} className="lottie" /> : null}
                        <figcaption className="p-2 font-medium">Adjust your savings by managing how much of them you keep</figcaption>
                    </div>
                    <article className="max-w-96 w-full text-purple-900">
                        <h2 className="mb-2 font-bold text-2xl">Numbers don't have to be complicated</h2>
                        <p>If you travel a lot and are worried your numbers won't match up, we have automated process you will be happy with.</p>
                    </article>
                </div>
                <div className="content flex justify-around items-center pb-10">
                    <article className="max-w-96 w-full text-purple-900">
                        <h2 className="font-bold text-2xl mb-2">Have a solid financial plan to keep you on top of your game</h2>
                        <p>Keep track of all the money coming in and out of your accounts - bills, budget, and income.</p>
                    </article>
                    <div className="animation border-2 pb-4 border-purple-300">
                    {animationData2 ? <Lottie options={{ ...defaultOptions2, height: 400, width: 400 }} className="lottie" /> : null}
                        <figcaption className="p-2 text-center">All-in-one solution, right at your fingertips.</figcaption>
                    </div>
                </div>
                <div className="content flex justify-around items-center pb-10">
                    <div className="animation pb-4 border-2 border-purple-300">
                    {animationData3 ? <Lottie options={{ ...defaultOptions3, height: 400, width: 400 }} className="lottie" /> : null}
                        <figcaption className="p-2 text-center">Solid tracking systems</figcaption>
                    </div>
                    <article className="max-w-96 w-full text-purple-900">
                        <h2 className="font-bold text-2xl mb-2">Need an organized way to manage your finances?</h2>
                        <p>We provide an elaborate dashboard that tracks your income, your budget relative to your expenses, and your loans. All in one profile.</p>
                    </article>
                </div>
                <div className="content flex justify-around items-center">
                    <article className="max-w-96 w-full text-purple-900">
                        <h2 className="font-bold text-2xl mb-2">Track your loan repayments with minimal effort</h2>
                        <p>Tired of waiting on reports and invoices to know what's left of what you owe? You no longer have to wait. Just use our loan calculator to show you your repayments from start to finish.</p>
                    </article>
                    <div className="animation border-2 border-purple-300 pb-4">
                    {animationData4 ? <Lottie options={{ ...defaultOptions4, height: 400, width: 400 }} className="lottie" /> : null}
                        <figcaption className="p-2 text-center">Stay atop your spending habits</figcaption>
                    </div>
                </div>
            </section>
            <section className="register relative flex flex-row-reverse items-center mt-16 bg-purple-400 p-4 rounded-2xl">
                <article className="text-cyan-200 rounded-2xl bg-black bg-opacity-20 p-8">
                    <p>LET'S START TODAY</p>
                    <h2 className="font-bold text-lg mb-4 mt-4 max-w-96 w-full">Manage your money in the best way with RepaySmart. Give yourself a chance at financial freedom.</h2>
                    <button className="get-started bg-white text-purple-900 hover:bg-cyan-600 w-full hover:text-purple-100 p-3 rounded-lg" onClick={openSignUpModal}>Get Started</button>
                </article>
                <div className="register-animation absolute left-20">
                    {animationData5 ? <Lottie options={defaultOptions5} className="lottie" height={isMobile ? 200 : 400} width={isMobile ? 200 : 400} /> : null}
                </div>
            </section>
            {isModalOpen && <SignUpModal onClose={closeSignUpModal} />}
        </section>
    )
}

export default MainSection;
