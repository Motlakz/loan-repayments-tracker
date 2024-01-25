import React, { useEffect, useRef } from 'react';
import logo from '../repay-smart-logo.png';

const Navbar = () => {
  const navTogglerRef = useRef(null);
  const navMenuRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const navToggler = navTogglerRef.current;
    const navMenu = navMenuRef.current;
    const navLinks = navLinksRef.current;

    if (navToggler && navMenu && navLinks) {
      allEventListeners();
    }

    // functions of all event listeners
    function allEventListeners() {
      navToggler.addEventListener('click', togglerClick);
      navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
    }

    // togglerClick function
    function togglerClick() {
      navToggler.classList.toggle('toggler-open');
      if (navMenu.classList.contains('open')) {
        navMenu.classList.add('close');
        setTimeout(() => {
          navMenu.classList.remove('close', 'open');
        }, 1000);
      } else {
        navMenu.classList.add('open');
      }
    }

    // navLinkClick function
    function navLinkClick() {
      if (navMenu.classList.contains('open')) {
        navToggler.click();
      }
    }

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      navToggler.removeEventListener('click', togglerClick);
      navLinks.forEach(elem => elem.removeEventListener('click', navLinkClick));
    };
  }, []);

  return (
    <nav className="bg-purple-500 flex justify-between items-center">
      <button type="button" className="nav-toggler" ref={navTogglerRef}>
        <span></span>
      </button>

      <div className="logo">
            <img src={logo} alt="repay smart logo" className='max-w-48 max-h-24' />
      </div>
     
      <ul className="navmenu flex items-center space-x-4" ref={navMenuRef}>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <a href="/home" className="text-white">Home</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="fa-regular fa-rectangle-list"></i></span>
          <a href="/about" className="text-white">About</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="fa-solid fa-bell"></i></span>
          <a href="/reminders" className="text-white">Reminders</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="icon"><i className="bi bi-exclamation-square"></i></span>
          <a href="/alerts" className="text-white">Alerts</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <span className="ico"><i className="fa-brands fa-blogger"></i></span>
          <a href="/blog" className="text-white">Blog</a>
        </li>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Expense Types <span className="icon ml-2"><i className="bi bi-chevron-down"></i></span>
        </button>
        <div id="dropdown" className="dropdown z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="text-center py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li className='p-2 hover:bg-purple-400'>
              <a href="/bills" className="text-white">Monthly Bills</a>
            </li>
            <li className='p-2 hover:bg-purple-400'>
              <a href="/income" className="text-white">Income Track</a>
            </li>
            <li className='p-2 hover:bg-purple-400'>
              <a href="/budget" className="text-white">Budget Track</a>
            </li>
          </ul>
        </div>
      </ul>

      <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Profile <span className="icon ml-2"><i className="bi bi-chevron-down"></i></span></button>
        <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="text-center py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
              <a href="/converter" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Currency Converter</a>
            </li>
            <li>
              <a href="/forum" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forum</a>
            </li>
            <li>
              <a href="/feedback" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Feedback</a>
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
