import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/Logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Addis AI Logo" className="w-24 h-24 mr-4 rounded-full" />
          <h1 className="text-2xl font-bold">Addis AI and Software Solutions</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link></li>
            <li><Link to="/computers" className="hover:text-blue-200 transition duration-300">Computers</Link></li>
            <li><Link to="/software" className="hover:text-blue-200 transition duration-300">Software</Link></li>
            <li><Link to="/websites" className="hover:text-blue-200 transition duration-300">Websites</Link></li>
            <li><Link to="/portfolio-websites" className="hover:text-blue-200 transition duration-300">Portfolio Websites</Link></li>
            <li><Link to="/mobile-apps" className="hover:text-blue-200 transition duration-300">Mobile Apps</Link></li>
            <li><Link to="/writing-accounts" className="hover:text-blue-200 transition duration-300">Writing Accounts</Link></li>
            <li><Link to="/online-courses" className="hover:text-blue-200 transition duration-300">Online Courses</Link></li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-indigo-900">
          <ul className="flex flex-col px-4 py-2">
            <li><Link to="/" className="block py-2 hover:text-blue-200 transition duration-300">Home</Link></li>
            <li><Link to="/computers" className="block py-2 hover:text-blue-200 transition duration-300">Computers</Link></li>
            <li><Link to="/software" className="block py-2 hover:text-blue-200 transition duration-300">Software</Link></li>
            <li><Link to="/websites" className="block py-2 hover:text-blue-200 transition duration-300">Websites</Link></li>
            <li><Link to="/portfolio-websites" className="block py-2 hover:text-blue-200 transition duration-300">Portfolio Websites</Link></li>
            <li><Link to="/mobile-apps" className="block py-2 hover:text-blue-200 transition duration-300">Mobile Apps</Link></li>
            <li><Link to="/writing-accounts" className="block py-2 hover:text-blue-200 transition duration-300">Writing Accounts</Link></li>
            <li><Link to="/online-courses" className="block py-2 hover:text-blue-200 transition duration-300">Online Courses</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;