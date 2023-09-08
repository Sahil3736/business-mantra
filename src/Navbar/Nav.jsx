import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/logo.jpg'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>


      <nav className="bg-gray-300 text-blue-900 ">

        <div className="flex justify-between items-center py-4  ">
          <div className="text-2xl font-bold "><img src={img1} className="w-20 ml-20 md:ml-48" />
            <div className='container mx-auto '><div className='md:ml-5 sm:ml-2 sm:te'><p className="text-xs md:text-xl lg:text-2xl text-yellow-950">M/s Mallappa Virappa Majati Saraf & Zaveri</p></div>
              <div className="flex  space-x-4 lg:hidden ml-48 mt-5">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FaFacebook size='1.5rem' />
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 mr-2">
                  <FaWhatsapp size='1.5rem' />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800 mr-2">
                  <FaInstagram size='1.5rem' />
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-blue-900 focus:outline-none focus:text-blue-900 mr-20"
            >
              <svg
                className="w-20 h-10 fill-inherit"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 4H4a2 2 0 00-2 2v1a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-2 8H6a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2zm2 8H4a2 2 0 01-2-2v-1a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2z"
                    fill="currentColor"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1zm1 3a1 1 0 011 1v12a1 1 0 11-2 0V6a1 1 0 011-1zm-2 15a1 1 0 100-2h2a1 1 0 100 2h-2z"
                    fill="currentColor"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* for pc Navbar */}
          <div className="hidden md:flex space-x-4 font-sans ">
            <div className="hidden md:flex space-x-4 font-sans text-xl ">
              <p className="hover:text-yellow-600 font-sans mr-5 font-medium tracking-wide"><Link to="/">Home</Link></p>
              <p className="hover:text-yellow-600 mr-5 font-medium tracking-wide"><Link to="/about">  About</Link></p>
              <p className="hover:text-yellow-600 mr-5 font-medium tracking-wide"><Link to="/gold">Gold</Link></p>
              <p className="hover:text-yellow-600 mr-5 font-medium tracking-wide"><Link to="/silver">Silver</Link></p>
              <p className="hover:text-yellow-600 mr-60 font-medium tracking-wide"><Link to="/contact">Contact</Link></p>

            </div>
            <div className="flex space-x-4  ">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <FaFacebook size='1.5rem' />
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 ">
                <FaWhatsapp size='1.5rem' />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 ">
                <FaInstagram size='1.5rem' />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-900">
            <p className="block py-2 px-4 text-white hover:bg-yellow-600 tracking-wide"> <Link to="/"> Home</Link></p>
            <p className="block py-2 px-4 text-white hover:bg-yellow-600 tracking-wide"><Link to="/about">About</Link></p>
            <p className="block py-2 px-4 text-white hover:bg-yellow-600 tracking-wide"> <Link to="/gold">Gold</Link></p>
            <p className="block py-2 px-4 text-white hover:bg-yellow-600 tracking-wide"><Link to="/silver">Silver</Link></p>
            <p className="block py-2 px-4 text-white hover:bg-yellow-600 tracking-wide"><Link to="/contact">Contact</Link></p>

          </div>
        )}



      </nav>

    </div>
  );
}

export default Nav;
