import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FinanceRoadMap from '../assets/money-bg.jpg';
import InputField from './InputField';
import FinanceManage from '../assets/pngwing.com.png';
import SuccessModal from './SuccessModal';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

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

        console.log('Form submitted:', formData);
        setIsModalOpen(true); // open the modal after form submission

        // Redirect to /dashboard after form submission
        setTimeout(() => {
            navigate('/landing_page');
        }, 2000);
    };

    return (
        <div className="signup-form flex items-stretch" style={{ maxHeight: '95vh' }}>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-2 w-full text-purple-900 p-8" 
                >
                <legend className="text-2xl font-bold mb-2">Sign up today to unlock the full potential of Repay Smart.</legend>
                <p className="text-lg mb-2">Take charge and fulfill your financial goals.</p>

                <div className="grid grid-cols-2 space-x-4">
                    <InputField id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} label="First Name" placeholder="Malcolm" autocomplete="on" />
                    <InputField id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} label="Last Name" placeholder="Federo" autocomplete="on" />
                </div>

                <InputField id="email" name="email" type="email" value={formData.email} onChange={handleChange} label="Email" placeholder="email@example.com" autocomplete="on" />
                <InputField id="password" name="password" type="password" value={formData.password} onChange={handleChange} label="Password" placeholder="**********" autocomplete="on" />
                <InputField id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} placeholder="**********" onChange={handleChange} label="Confirm Password" autocomplete="on" />

                
                <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700"
                >
                    Sign Up
                </button>

                <p className="text-lg text-center text-purple-700 mt-2">
                    Already have an account? <Link to="/signin" className="underline">Sign in here</Link>.
                </p>
                    
                <figure className="manage flex items-center justify-center">
                    <img src={FinanceManage} className='max-w-48 max-h-48 object-cover' alt="finance manage illustration" />
                </figure>
            </form>

            <SuccessModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

            <figure className="flex-1">
                <img src={FinanceRoadMap} alt="Finance Roadmap" className="h-full w-full object-cover rounded-r-md" />
            </figure>
        </div>
    );
};

export default SignUpForm;
