import React from "react";
import logo from '../repay-smart-logo.png';
import TwitterLogo from '../assets/twitter.svg';
import LinkedInLogo from '../assets/linkedin.svg';
import GitHubLogo from '../assets/github.svg';

function Footer() {
    return (
        <footer className="w-full bg-purple-900 flex items-center justify-between">
            <div className="socials ml-3 flex gap-4 p-2 rounded-md bg-purple-50">
                <span className="icon">
                    <img src={TwitterLogo} className="w-8 h-8" alt="Twitter logo" />
                </span>
                <span className="icon">
                    <img src={LinkedInLogo} className="w-8 h-8" alt="LinkedIn logo" />
                </span>
                <span className="icon">
                    <img src={GitHubLogo} className="w-8 h-8" alt="GitHub logo" />
                </span>
            </div>
            <p className="copyright flex flex-col text-center text-purple-100 p-4"><span>&copy; 2023 - 2024</span> RepaySmart. All Rights Reserved</p>
            <img src={logo} alt="repay smart logo" className='max-w-40 max-h-20' />
        </footer>
    )
}

export default Footer;
