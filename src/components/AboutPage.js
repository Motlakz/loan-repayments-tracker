import React from "react";
import PlanningIllustration from '../assets/financial-planning.jpg';
import FinanceManage from '../assets/finance-manage-illustration.jpg';
import AlertIcon from "../assets/notification-svgrepo-com.svg";
import PlanSvg from "../assets/plan-svgrepo-com.svg";
import CalcIcon from "../assets/currency-calculator-svgrepo-com.svg";
import SignUpForm from "./SignUpForm";

function AboutPage() {
    return (
        <div className="about-page bg-cover bg-no-repeat p-6 flex flex-col items-center gap-6">
            <section className="bg-purple-100 rounded-2xl p-10 mt-28 flex flex-col items-center justify-between gap-10 slow">
                <article className="text-center pb-10">
                    <div className="images relative flex justify-between">
                        <figure className="absolute -left-10 -top-10">
                            <img src={PlanningIllustration} className="first max-w-24" alt="planning illustration" />
                        </figure>
                        <figure className="absolute -right-10 -top-10">
                            <img src={FinanceManage} className="second max-w-24" alt="finance management illustration" />
                        </figure>
                    </div>
                    
                    <h1 className="text-3xl text-purple-600 font-semibold">About Repay Smart:</h1>
                    <p className="text-2xl">Welcome to Repay Smart, your one-stop solution for managing your finances.</p>
                </article>

                <article>
                    <figure>
                        <img src={AlertIcon} className="max-w-36 max-h-36 float-left w-full" alt="" />  
                    </figure>
                    <h2 className="text-2xl font-semibold mb-4">Reminders and Alerts:</h2>
                    <p className="text-xl">Our <strong className="text-purple-700">Reminders</strong> feature ensures you never miss a payment again. Set reminders for your bills, loan payments, and other important financial deadlines. Stay informed about your financial health with our <strong className="text-purple-700">Alerts</strong> feature. We'll notify you about significant changes in your accounts, unusual activity, and provide helpful tips to improve your financial health.</p>
                </article>
                
                <article>
                    <figure>
                        <img src={PlanSvg} className="max-w-32 max-h-32 float-right mr-4 w-full" alt="" />
                    </figure>
                    <h2 className="text-2xl font-semibold mb-4">Expense Types:</h2>
                    <p className="text-xl">Our <strong className="text-purple-700">Expense Types</strong> feature allows you to categorize and manage your money more effectively. Track your monthly bills, monitor your income, and keep an eye on your budget. This feature helps you understand where your money is going and how you can manage it better.</p>
                </article>
                
                <article>
                    <figure>
                        <img src={CalcIcon} className="max-w-32 max-h-32 float-left w-full" alt="" />
                    </figure>
                    <h2 className="text-2xl font-semibold mb-4">Currency Converter:</h2>
                    <p className="text-xl">Our <strong className="text-purple-700">Currency Converter</strong> tool helps you understand the value of your money in different currencies. Whether you're planning a trip abroad or making an international purchase, this tool can give you the current exchange rates and help you make informed financial decisions.</p>
                </article>
            </section>
            <section className="bg-purple-200 text-purple-800 rounded-2xl">
                <SignUpForm />
            </section>
        </div>
    )
}

export default AboutPage;
