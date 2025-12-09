import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-medical-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           {/* Medical Lab / Tech background */}
           <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1920" alt="Medical Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Med Care Plus Multi Speciality Clinic Hubballi, we provide essential and community-focused healthcare services designed for convenience and comfort.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
              {/* Service Image */}
              <div className="h-48 overflow-hidden relative group">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg text-medical-600 shadow-sm">
                   <service.icon size={20} />
                </div>
              </div>

              <div className="p-8 flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-medical-600 bg-medical-50 px-2 py-1 rounded uppercase tracking-wide">
                    Service {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-center">
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center gap-2 bg-medical-600 hover:bg-medical-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local SEO Text Block */}
        <div className="mt-20 bg-white p-8 rounded-2xl border border-gray-200 text-center relative overflow-hidden">
          <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Looking for “day care center near me” or quick treatment?</h3>
              <p className="text-gray-600 mb-0 max-w-2xl mx-auto">
                Whether you need a routine checkup or immediate day-care observation, Med Care Plus in Hubballi is equipped to handle your family's health needs with care and precision.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;