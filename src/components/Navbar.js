import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../repay-smart-logo.png';
import Dropdown from './Dropdown';
// import SignUpModal from './SignUpModal';

const Navbar = ({ isAuthenticated, openSignUpModal, openSignInModal }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/home' || location.pathname === '/';
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
    <>
    <nav className={`flex justify-between items-center absolute top-0 w-full z-10 pr-3 ${isHomepage ? 'bg-cyan-500' : 'bg-purple-500'}`}>
      <button type="button" className="nav-toggler" ref={navTogglerRef}>
        <span></span>
      </button>

      <div className="logo">
        <img src={logo} alt="repay smart logo" className='max-w-40 max-h-20' />
      </div>

      <ul className={`navmenu flex items-center space-x-4 ${isAuthenticated ? 'authenticated' : ''}`} ref={navMenuRef}>
        <li className='p-2 group hover:bg-cyan-200 rounded transition-all delay-400'>
          <span className="icon text-white group-hover:text-purple-500"><i className="fa-solid fa-house"></i></span>
          <Link to="/home" className="text-white group-hover:text-purple-500">Home</Link>
        </li>
        <li className='p-2 group hover:bg-cyan-200 rounded transition-all delay-400'>
          <span className="icon text-white group-hover:text-purple-500"><i className="fa-regular fa-rectangle-list"></i></span>
          <Link to="/about" className="text-white group-hover:text-purple-500">About</Link>
        </li>

        {isAuthenticated ? (
          <>
            <li className='p-2 group hover:bg-cyan-200 rounded transition-all delay-400'>
              <span className="icon text-white group-hover:text-purple-500"><i className="fa-solid fa-bell"></i></span>
              <Link to="/alerts" className="text-white group-hover:text-purple-500">Alerts</Link>
            </li>
            <li className='p-2 group hover:bg-cyan-200 rounded transition-all delay-400'>
              <span className="icon text-white group-hover:text-purple-500"><i className="bi bi-exclamation-square"></i></span>
              <Link to="/reminders" className="text-white group-hover:text-purple-500">Reminders</Link>
            </li>
          </>
        ) : null}

        <li className='p-2 group hover:bg-cyan-200 rounded transition-all delay-400'>
          <span className="icon text-white group-hover:text-purple-500"><i className="fa-brands fa-blogger"></i></span>
          <Link to="/blog" className="text-white group-hover:text-purple-500">Blog</Link>
        </li>

        <Dropdown
          buttonText="Profile"
          items={[
              { to: "/currency_converter", label: "Currency Converter" },
              { to: "/faqs", label: "FAQs" },
              { to: "/feedback", label: "Feedback" },
            ]}
          >

          <div className="py-2 flex justify-around">
            {isAuthenticated ? (
              <button className="block rounded-md px-4 py-2 text-sm bg-purple-900 text-gray-200 hover:text-gray-700 hover:bg-purple-200 dark:hover:bg-purple-600 dark:text-gray-00 dark:hover:text-white group-hover:text-purple-500">
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={openSignUpModal}
                  className="block rounded-md px-4 py-2 text-sm bg-purple-900 text-gray-200 hover:text-gray-700 hover:bg-purple-200 dark:hover:bg-purple-600 dark:text-gray-00 dark:hover:text-white group-hover:text-purple-500"
                >
                  Sign Up
                </button>

                <button 
                  onClick={openSignInModal}
                  className="block rounded-md px-4 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-700 dark:hover:text-white group-hover:text-purple-500">
                  Sign In
                </button>
              </>
            )}
          </div>
        </Dropdown>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
