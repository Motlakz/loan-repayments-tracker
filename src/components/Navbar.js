import React from 'react';
import logo from '../repay-smart-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 flex justify-between items-center p-4">
      <div className="logo">
            <img src={logo} alt="repay smart logo" className='h-12' />
      </div>
     
      <ul className="flex items-center space-x-4">
        <li className='p-2 hover:bg-purple-400'>
          <a href="/home" className="text-white">Home</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <a href="/about" className="text-white">About</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <a href="/reminders" className="text-white">Reminders</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <a href="/alerts" className="text-white">Alerts</a>
        </li>
        <li className='p-2 hover:bg-purple-400'>
          <a href="/blog" className="text-white">Blog</a>
        </li>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Expense Types <span className="icon ml-2"><i class="bi bi-chevron-down"></i></span>
        </button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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

      <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Profile <span className="icon ml-2"><i class="bi bi-chevron-down"></i></span></button>
        <div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="text-center py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
            <li>
              <a href="/converter" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Currency Converter</a>
            </li>
            <li>
              <a href="/forum" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forum</a>
            </li>
            <li>
              <a href="/feedback" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Feedback</a>
            </li>
          </ul>
          <div class="py-2 flex justify-around">
            <button class="block rounded-md px-4 py-2 text-sm bg-purple-900 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Up</button>
            <button class="block rounded-md px-4 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white">Sign In</button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
