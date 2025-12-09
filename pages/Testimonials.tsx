import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h1>
          <p className="text-lg text-gray-600">Real feedback from families in Vidya Nagar and Hubballi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
              <Quote className="absolute top-8 right-8 text-medical-200 opacity-50" size={48} />
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>

              <p className="text-gray-700 text-lg italic mb-6 relative z-10">"{t.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-medical-200 rounded-full flex items-center justify-center text-medical-700 font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.author}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;