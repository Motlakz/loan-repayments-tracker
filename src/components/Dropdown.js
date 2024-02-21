// Dropdown.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ buttonText, items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white bg-purple-200 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-purple-700 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 w-44"
        type="button"
      >
        {buttonText} <span className="icon ml-2"><i className="bi bi-chevron-down"></i></span>
      </button>
      {isOpen && (
        <div className="dropdown z-50 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="text-center py-2 text-gray-700 dark:text-gray-200">
            {items.map((item, index) => (
              <li key={index} className='p-2 hover:bg-purple-400'>
                <Link to={item.to} className="text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
