import React, { useState } from 'react';
import FinanceRoadMap from '../assets/money-bg.jpg';
import ManagePic from '../assets/pngwing.com.png';
import InputField from './InputField';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    const { firstName, lastName, email, password, confirmPassword } = formData;
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('All fields are required.');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Add logic to handle form submission (e.g., API call)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="signup-form flex items-stretch">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-lg w-full p-8">
                <legend className="text-3xl font-bold mb-6">Sign up today to unlock the full potential of Repay Smart.</legend>

                <div className="grid grid-cols-2 space-x-4">
                    <InputField id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} label="First Name" placeholder="Malcolm" />
                    <InputField id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} label="Last Name" placeholder="Federo" />
                </div>

                <InputField id="email" name="email" type="email" value={formData.email} onChange={handleChange} label="Email" placeholder="email@example.com" />
                <InputField id="password" name="password" type="password" value={formData.password} onChange={handleChange} label="Password" placeholder="**********" />
                <InputField id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} placeholder="**********" onChange={handleChange} label="Confirm Password" />

                <button type="submit" className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700">
                Sign Up
                </button>
                <p>Take charge and fulfill your financial goals.</p>
                <figure>
                    <img src={ManagePic} alt="finance manage img" />
                </figure>
            </form>

            <figure className="flex-1">
                <img src={FinanceRoadMap} alt="Finance Roadmap" className="h-full object-cover rounded-r-2xl" />
            </figure>
        </div>
    );
};

export default SignUpForm;
