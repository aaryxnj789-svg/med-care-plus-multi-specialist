import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { APP_NAME, NAV_ITEMS, CONTACT_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 transition-all duration-300">
        {/* Top Bar for desktop */}
        <div className="hidden md:flex justify-between items-center bg-medical-700 text-white px-6 py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Vidya Nagar, Hubballi</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> Open 24 Hours (Call to confirm)</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-medical-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <span className="font-bold text-xl text-gray-800 tracking-tight">
                  {APP_NAME}
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-medical-600 border-b-2 border-medical-600' : 'text-gray-600 hover:text-medical-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact">
                <button className="bg-medical-600 hover:bg-medical-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 shadow-sm">
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medical-600 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-medical-50 text-medical-700' : 'text-gray-700 hover:bg-gray-50 hover:text-medical-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 px-3">
               <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-medical-600 text-white px-4 py-2 rounded-md font-medium">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky CTA - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-[60] flex">
        <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 bg-medical-600 text-white py-4 flex items-center justify-center font-bold gap-2 text-lg active:bg-medical-700 transition-colors">
          <Phone size={20} className="animate-pulse" /> Call Us Now
        </a>
        <Link to="/contact" className="flex-1 bg-slate-100 text-slate-800 py-4 flex items-center justify-center font-semibold gap-2 border-l border-gray-200">
          <MapPin size={20} /> Locate
        </Link>
      </div>
    </>
  );
};

export default Navbar;