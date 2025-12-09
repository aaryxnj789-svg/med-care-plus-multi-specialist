import React from 'react';
import ContactForm from '../components/UI/ContactForm';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-medical-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Med Care Plus</h1>
          <p className="text-medical-200">We are here to assist you 24/7.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-medical-50 text-medical-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm mt-1">{CONTACT_INFO.address}</p>
                    <div className="mt-2 text-xs text-gray-500">
                        Near: Devangpeth Road, Vidya Nagar High School, Bengeri Market.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-medical-50 text-medical-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">{CONTACT_INFO.phone}</p>
                    <p className="text-xs text-gray-400 mt-1">Not listed publicly — available upon visit</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-medical-50 text-medical-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Timings</h4>
                    <p className="text-gray-600 text-sm mt-1">{CONTACT_INFO.timings}</p>
                    <p className="text-xs text-red-500 mt-1">Recommended to call and confirm.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 h-80 overflow-hidden relative">
               <iframe 
                src={CONTACT_INFO.googleMapsUrl}
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Med Care Plus Location"
               ></iframe>
               <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded shadow-md text-sm font-semibold flex items-center gap-2 hover:bg-gray-50"
               >
                <Navigation size={14} /> Get Directions
               </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;