import React, { useState } from 'react';
import FinanceRoadMap from '../assets/money-bg.jpg';
import InputField from './InputField';
import FinanceManage from '../assets/pngwing.com.png';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const { email, password } = formData;
    if (!email || !password) {
      alert('All fields are required.');
      return;
    }

    // Add logic to handle form submission (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signin-form flex items-stretch"  style={{ maxHeight: '90vh' }}>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4 w-full text-purple-900 p-8">
        <legend className="text-2xl font-bold">Sign in to Repay Smart</legend>
        <p className="text-lg">Welcome back! Sign in to access your account.</p>

        <InputField id="email" name="email" type="email" value={formData.email} onChange={handleChange} label="Email" placeholder="email@example.com" />
        <InputField id="password" name="password" type="password" value={formData.password} onChange={handleChange} label="Password" placeholder="**********" />

        <div className="buttons">
          <button type="submit" className="w-full bg-cyan-600 text-white p-2 rounded-md hover:bg-cyan-700">
            Sign In
          </button>
        </div>
        <p className="text-lg text-center text-purple-700 mt-2">
          Don't have an account? <a href="/signup" className="underline">Sign up here</a>.
        </p>
        <figure className="manage flex items-center justify-center">
          <img src={FinanceManage} className='max-w-56 max-h-56 object-cover pb-10' alt="finance manage illustration" />
        </figure>
      </form>

      <figure className="flex-1">
        <img src={FinanceRoadMap} alt="Finance Roadmap" className="h-full w-full object-cover rounded-r-md" />
      </figure>
    </div>
  );
};

export default SignInForm;
