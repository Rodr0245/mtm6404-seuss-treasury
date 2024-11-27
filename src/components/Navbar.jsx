import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleLinkClick = () => {
    if (navbarOpen) {
      setNavbarOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto px-6 sm:px-6 lg:px-16 py-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-3xl font-black tracking-tight text-customBlack -translate-y-1">
                <Link to="/" onClick={handleLinkClick}>Seussology</Link>
              </h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 items-center">
								<Link to="/quotes" className="text-customBlack px-3 py-2 rounded-md text-md font-bold" onClick={handleLinkClick}>Quotes</Link>
                <Link to="/#booksDiv" className="text-white rounded-full text-md font-regular bg-customBlack px-6 py-4 hover:bg-customYellow transition ease duration-300 hover:font-medium hover:text-customBlack" onClick={() => window.scrollTo({top: document.getElementById('booksDiv').offsetTop - 80, behavior: 'smooth'})}>See the books</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50"
              aria-controls="mobile-menu"
              aria-expanded={navbarOpen}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={navbarOpen ? 'hidden' : 'block h-6 w-6'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={navbarOpen ? 'block h-6 w-6' : 'hidden'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden fixed inset-0 z-10 ${navbarOpen ? 'block motion-preset-slide-left-lg' : 'motion-preset-slide-right-lg delay-1000 hidden'}`} id="mobile-menu">
        <div className="min-h-screen bg-customBlack flex flex-col items-center justify-center">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-customBlack w-full text-end">
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-7xl font-bold"
              onClick={handleLinkClick}
            >
              Books
            </Link>
            <Link
              to="/quotes"
              className="text-white block px-3 py-2 rounded-md text-7xl font-bold"
              onClick={handleLinkClick}
            >
              Quotes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

