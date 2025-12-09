import React from 'react';
import { VALUES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-medical-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing dependable medical care closer to the community in Hubballi.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Located at Silver Park, 951/4B, Devangpeth Road, Vidya Nagar, Bengeri Extension, Med Care Plus is designed to make healthcare accessible, affordable, and reassuring for families and individuals in and around Hubballi.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a multi speciality clinic and day care center, we focus on delivering essential medical services including consultations, minor treatments, injections, IV fluids, and short-term observation. We operate with a strict commitment to patient safety and comfort.
            </p>
            <div className="bg-medical-50 p-6 rounded-lg border-l-4 border-medical-500">
                <p className="italic text-gray-700 font-medium">
                    "We proudly serve residents across Vidya Nagar, Bengeri Extension, Devangpeth Road, and Kori, ensuring that quality healthcare is always within reach."
                </p>
            </div>
          </div>
          <div className="relative">
             {/* Realistic Clinic/Modern Building Exterior */}
             <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" 
                alt="Med Care Plus Clinic Building" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-medical-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">To provide reliable, community-centered healthcare that prioritizes patient well-being and quick access to essential treatments.</p>
          </div>
          <div className="bg-medical-900 text-white p-8 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300">To be recognized as a trusted neighborhood clinic and day care center Hubballi residents can turn to for everyday medical needs.</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl hover:border-medical-400 transition-colors">
                <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center text-medical-600 mb-4">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;