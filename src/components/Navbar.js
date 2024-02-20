// Navbar.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../repay-smart-logo.png';
import Dropdown from './Dropdown'; // Import the Dropdown component

const Navbar = () => {
  const navTogglerRef = useRef(null);
  const navMenuRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const navToggler = navTogglerRef.current;
    const navMenu = navMenuRef.current;
    const navLinks = navLinksRef.current;

    if (navToggler && navMenu && navLinks) {
      const togglerClick = () => {
        navToggler.classList.toggle('toggler-open');
        navMenu.classList.toggle('open');
      };

      const navLinkClick = () => {
        if (navMenu.classList.contains('open')) {
          navToggler.click();
        }
      };

      navToggler.addEventListener('click', togglerClick);
      navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));

      // Cleanup function to remove event listeners when component unmounts
      return () => {
        navToggler.removeEventListener('click', togglerClick);
        navLinks.forEach(elem => elem.removeEventListener('click', navLinkClick));
      };
    }
  }, [navTogglerRef, navMenuRef, navLinksRef]);

  return (
    <nav className="bg-purple-500 flex justify-between items-center absolute top-0 w-full z-10 pr-2">
      <button type="button" className="nav-toggler" ref={navTogglerRef}>
        <span></span>
      </button>

      <div className="logo">
        <img src={logo} alt="repay smart logo" className='max-w-48 max-h-24' />
      </div>

      <ul className="navmenu flex items-center space-x-4" ref={navMenuRef}>
        <li className='p-2 hover:bg-purple-400 rounded transition-all delay-400'>
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className='p-2 hover:bg-purple-400 rounded transition-all delay-400'>
          <span className="icon"><i className="fa-regular fa-rectangle-list"></i></span>
          <Link to="/about" className="text-white">About</Link>
        </li>
        <li className='p-2 hover:bg-purple-400 rounded transition-all delay-400'>
          <span className="icon"><i className="fa-solid fa-bell"></i></span>
          <Link to="/reminders" className="text-white">Reminders</Link>
        </li>
        <li className='p-2 hover:bg-purple-400 rounded transition-all delay-400'>
          <span className="icon"><i className="bi bi-exclamation-square"></i></span>
          <Link to="/alerts" className="text-white">Alerts</Link>
        </li>
        <li className='p-2 hover:bg-purple-400 rounded transition-all delay-400'>
          <span className="ico"><i className="fa-brands fa-blogger"></i></span>
          <Link to="/blog" className="text-white">Blog</Link>
        </li>
        <Dropdown
          buttonText="Expense Types"
          items={[
            { to: "/monthly_bills", label: "Monthly Bills" },
            { to: "/income_track", label: "Income Track" },
            { to: "/budget", label: "Budget Track" },
          ]}
        />
      </ul>

      <Dropdown
        buttonText="Profile"
        items={[
          { to: "/currency_converter", label: "Currency Converter" },
          { to: "/faqs", label: "FAQs" },
          { to: "/feedback", label: "Feedback" },
        ]}
      >
        <div className="py-2 flex justify-around">
          <button className="block rounded-md px-4 py-2 text-sm bg-purple-500 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Up</button>
          <button className="block rounded-md px-4 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white">Sign In</button>
        </div>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
