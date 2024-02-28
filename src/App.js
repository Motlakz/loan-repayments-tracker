import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Reminders from './components/Reminders';
import Alerts from './components/Alerts';
import Blog from './components/Blog';
import MonthlyBills from './components/MonthlyBills';
import Income from './components/Income';
import Budget from './components/Budget';
import CurrencyConverter from './components/CurrencyConverter';
import RepaymentsTracker from './components/RepaymentsTracker';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';
import SignInModal from './components/SignInModal';

function App() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  
  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <div className="bg-purple-100 flex flex-col justify-center items-center min-h-screen">
      <Router>
        <header className='w-full'>
          <Navbar isAuthenticated={false} openSignUpModal={openSignUpModal} openSignInModal={openSignInModal} />
        </header>

        {isSignUpModalOpen && <SignUpModal onClose={closeSignUpModal} />}
        {isSignInModalOpen && <SignInModal onClose={closeSignInModal} />}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/monthly_bills" element={<MonthlyBills />} />
          <Route path="/income_track" element={<Income />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/currency_converter" element={<CurrencyConverter />} />
          <Route path="/loan_tracker" element={<RepaymentsTracker />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
