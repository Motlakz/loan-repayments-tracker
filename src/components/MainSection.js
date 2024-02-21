import React from "react";
import LoanTrackImg from "../assets/mortgage-loan-mortgage-svgrepo-com.svg";
import AlertIcon from "../assets/notification-svgrepo-com.svg";
import PlanSvg from "../assets/plan-svgrepo-com.svg";
import CalcIcon from "../assets/currency-calculator-svgrepo-com.svg";

function MainSection() {
    return (
        <section className="mt-16">
            <article>
                <h2 className="text-2xl font-bold">We provide the coolest services!</h2>
            </article>
            <div className="cards flex">
                <div className="card">
                    <figure>
                        <img src={LoanTrackImg} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                </div>
                <div className="card">
                    <figure>
                        <img src={AlertIcon} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                </div>
                <div className="card">
                    <figure>
                        <img src={PlanSvg} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                </div>
                <div className="card">
                    <figure>
                        <img src={CalcIcon} className="max-w-24 max-h-24 w-full" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default MainSection;
