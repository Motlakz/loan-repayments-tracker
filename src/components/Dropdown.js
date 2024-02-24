import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the Dropdown component
const Dropdown = ({ buttonText, items, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${isOpen ? 'open' : ''}`}>
      <button
        onClick={toggleDropdown}
        className={`text-white bg-transparent focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center ${isHomePage ? 'dark:bg-purple-500 dark:hover:bg-purple-500 dark:focus:ring-purple-600' : 'dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-cyan-600'} w-full min-w-44`}
        type="button"
      >
        {buttonText} <span className="icon ml-2"><i className="bi bi-chevron-down"></i></span>
      </button>
      <div
        className={`dropdown z-50 absolute right-0 mt-1 bg-gray-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-transform duration-500 ease-out ${isOpen ? 'scale-y-100 origin-top' : 'scale-y-0 origin-top'}`}
      >
        <ul className={`text-center py-2 dark:text-gray-200 transition-transform duration-500 ease-out ${isOpen ? 'scale-y-100 origin-top' : 'scale-y-0 origin-top'}`}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`p-2 group hover:bg-cyan-200 dark:hover:bg-purple-200 transition-background-color duration-500 ease-out ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
            >
              <Link
                to={item.to}
                className={`dark:text-white text-cyan-700 dark:group-hover:text-purple-700 transition-colors duration-500 ease-out ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
