import React, {useState } from "react";
import { Link } from "react-router-dom";
import logo from '../repay-smart-logo.jpeg';

function Sidebar() {
    const [sidebarActive, setSidebarActive] = useState(false);

  const handleSubMenuClick = (event) => {
    const subMenu = event.currentTarget.nextElementSibling;
    subMenu.style.maxHeight = subMenu.style.maxHeight === '400px' ? '0' : '400px';
    subMenu.style.opacity = subMenu.style.opacity === '1' ? '0' : '1';

    const dropdownIcon = event.currentTarget.querySelector('.dropdown');
    dropdownIcon.classList.toggle('rotate');
  };

  const handleMenuBtnClick = () => {
    setSidebarActive(true);
  };

  const handleCloseBtnClick = () => {
    setSidebarActive(false);
  };
  
    return (
        <>
            <button className={`menu-btn absolute left-0 top-0 m-16 text-xl bg-purple-200 p-2 rounded-lg text-purple-600 ${sidebarActive ? 'hidden' : ''}`} onClick={handleMenuBtnClick}>
                <i className="bi bi-arrow-bar-left" title="Menu"></i>
            </button>

            <aside className={`side-bar mt-16 ${sidebarActive ? 'active' : ''}`}>
                <button className="close-btn absolute right-0 bg-white px-2 py-1 text-purple-600 rounded-lg m-2" onClick={handleCloseBtnClick}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="p-3 text-center">
                    <img src={logo} className="w-full max-w-56 h-full max-h-36 object-cover rounded-xl" alt="App logo" />
                </div>

                <section className="menu">
                    <div className="item">
                        <Link to="#" className="sub-btn" onClick={handleSubMenuClick}>
                            <i className="bi bi-alphabet-uppercase"></i>FINANCIAL TOOLS<i className="fas fa-angle-right dropdown"></i>
                        </Link>
                        <div className="sub-menu">
                            <Link to="/tax_calculator" className="w-full bg-purple-600 text-white p-2 hover:bg-purple-700 text-center">
                                Tax Calculator
                            </Link>
                            <Link to="/savings_tracker" className="w-full bg-purple-600 text-white p-2 hover:bg-purple-700 text-center">
                                Savings Tracker
                            </Link>
                            <Link to="/financial_goals" className="w-full bg-purple-600 text-white p-2 hover:bg-purple-700 text-center">
                                Financial Goals
                            </Link>
                            <Link to="/credit_score" className="w-full bg-purple-600 text-white p-2 hover:bg-purple-700 text-center">
                                Credit Score Checker
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <Link to="#" className="sub-btn" onClick={handleSubMenuClick}>
                            <i className="bi bi-alphabet-uppercase"></i>NOTIFICATIONS<i className="fas fa-angle-right dropdown"></i>
                        </Link>
                        <div className="sub-menu">
                            <Link to="/reminders" className="w-full text-center bg-indigo-600 text-white p-2 hover:bg-indigo-700">Reminders</Link>
                            <Link to="/alerts" className="w-full text-center bg-indigo-600 text-white p-2 hover:bg-indigo-700">Alerts</Link>
                        </div>
                    </div>

                    <div className="item">
                        <Link to="#" className="sub-btn" onClick={handleSubMenuClick}>
                            <i className="bi bi-alphabet-uppercase"></i>FINANCE TYPES<i className="fas fa-angle-right dropdown"></i>
                        </Link>
                        <div className="sub-menu">
                            <Link to="/monthly_bills" className="w-full text-center bg-cyan-600 text-white p-2 hover:bg-cyan-700">Monthly Bills</Link>
                            <Link to="/income_track" className="w-full text-center bg-cyan-600 text-white p-2 hover:bg-cyan-700">Income Track</Link>
                            <Link to="/budget" className="w-full text-center bg-cyan-600 text-white p-2 hover:bg-cyan-700">Budget Track</Link>
                            <Link to="/loan_tracker" className="w-full text-center bg-cyan-600 text-white p-2 hover:bg-cyan-700">Loan Repayments Tracker</Link>
                        </div>
                    </div>
                </section>
            </aside>
        </>
    );
}

export default Sidebar;
