import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Sidebar() {
  
    return (
        <aside class="sidebar bg-purple-200 p-4 flex flex-col gap-12 justify-center">
            <Dropdown 
                buttonText="Notifications"
                items={[
                    {to: "/reminders", label: "Reminders"},
                    {to: "/alerts", label: "Alerts"},
                ]}
            />

            <Dropdown
                buttonText="Expense Types"
                items={[
                    { to: "/monthly_bills", label: "Monthly Bills" },
                    { to: "/income_track", label: "Income Track" },
                    { to: "/budget", label: "Budget Track" },
                    { to: "/loan_tracker", label: "Loan Tracker" }
                ]}
            />

            <Link to="/tax_calculator" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 text-center">
                Tax Calculator
            </Link>
            <Link to="/savings_tracker" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 text-center">
                Savings Tracker
            </Link>
            <Link to="/financial_goals" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 text-center">
                Financial Goals
            </Link>
            <Link to="/credit_score" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 text-center">
                Credit Score Checker
            </Link>
        </aside>
    );
}

export default Sidebar;
