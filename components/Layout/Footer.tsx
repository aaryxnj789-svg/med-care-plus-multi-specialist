import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { APP_NAME, CONTACT_INFO, NAV_ITEMS } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Brand */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">{APP_NAME}</h3>
              <p className="text-sm mb-4 leading-relaxed">
                Hubballi’s trusted neighborhood healthcare partner. Committed to delivering reliable, accessible, and family-centered medical care.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm hover:text-medical-500 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>General Consultation</li>
                <li>Day Care Services</li>
                <li>Minor Procedures</li>
                <li>Health Checkups</li>
                <li>IV & Injection Services</li>
                <li>Emergency Support</li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-medical-500 flex-shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-medical-500 flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-medical-500 flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-medical-500 flex-shrink-0" />
                  <span>{CONTACT_INFO.timings}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-gray-500">
            <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Spacer for sticky footer on mobile, handled by Navbar component now */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default Footer;