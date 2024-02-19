import React, { useEffect, useRef } from 'react';
import logo from '../repay-smart-logo.png';
import { Link } from 'react-router-dom';

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
    <nav className="bg-purple-500 flex justify-between items-center absolute top-0 w-full z-10">
      <button type="button" className="nav-toggler" ref={navTogglerRef}>
        <span></span>
      </button>

      <div className="logo">
            <img src={logo} alt="repay smart logo" className='max-w-48 max-h-24' />
      </div>
     
      <ul className="navmenu flex items-center space-x-4" ref={navMenuRef}>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="fa-regular fa-rectangle-list"></i></span>
          <Link to="/about" className="text-white">About</Link>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="fa-solid fa-bell"></i></span>
          <Link to="/reminders" className="text-white">Reminders</Link>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="bi bi-exclamation-square"></i></span>
          <Link to="/alerts" className="text-white">Alerts</Link>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="ico"><i className="fa-brands fa-blogger"></i></span>
          <Link to="/blog" className="text-white">Blog</Link>
        </li>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Expense Types <span className="icon ml-2"><i className="bi bi-chevron-down"></i></span>
        </button>
        <div id="dropdown" className="dropdown z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="text-center py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li className='p-2 hover:bg-purple-400'>
              <Link to="/monthly_bills" className="text-white">Monthly Bills</Link>
            </li>
            <li className='p-2 hover:bg-purple-400'>
              <Link to="/income_track" className="text-white">Income Track</Link>
            </li>
            <li className='p-2 hover:bg-purple-400'>
              <Link to="/budget" className="text-white">Budget Track</Link>
            </li>
          </ul>
        </div>
      </ul>

      <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white mr-2 bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Profile <span className="icon ml-2"><i className="bi bi-chevron-down"></i></span></button>
        <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="text-center py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
              <Link to="/currency_converter" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Currency Converter</Link>
            </li>
            <li>
              <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FAQs</Link>
            </li>
            <li>
              <Link to="/feedback" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Feedback</Link>
            </li>
          </ul>
          <div className="py-2 flex justify-around">
            <button className="block rounded-md px-4 py-2 text-sm bg-purple-900 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Up</button>
            <button className="block rounded-md px-4 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white">Sign In</button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
