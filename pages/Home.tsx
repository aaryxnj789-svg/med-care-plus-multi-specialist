import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, ShieldCheck, Activity, UserPlus, HeartPulse } from 'lucide-react';
import { SERVICES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', patients: 40 },
  { name: 'Tue', patients: 35 },
  { name: 'Wed', patients: 50 },
  { name: 'Thu', patients: 45 },
  { name: 'Fri', patients: 60 },
  { name: 'Sat', patients: 55 },
  { name: 'Sun', patients: 30 },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-medical-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
            {/* Medical Reception/Hallway Background */}
            <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
                alt="Medical Clinic Interior" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-medical-900/90 to-medical-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="inline-block bg-accent-600 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-6">
              Hubballi’s Trusted Healthcare
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable, Accessible, & <span className="text-accent-400">Family-Centered</span> Care.
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Med Care Plus provides comprehensive day-care services, general consultations, and multi-speciality support for patients of all ages in Vidya Nagar and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2">
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-center transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 hidden lg:block">
            {/* Doctor consulting patient image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                 <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                    alt="Doctor Consulting Patient" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-medical-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">24-Hour Availability</h4>
                        <p className="text-medical-100 text-sm">Always here when you need us</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Vidya Nagar, Hubballi</h4>
                        <p className="text-medical-100 text-sm">Convenient neighborhood location</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Trusted Care</h4>
                        <p className="text-medical-100 text-sm">Patient-centered approach</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Med Care Plus?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We serve as a community-first Hubballi clinic, offering essential medical care ensuring comfort, safety, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Friendly Medical Team", desc: "Approachable staff dedicated to your well-being.", icon: UserPlus },
              { title: "Neighborhood Location", desc: "Located near Devangpeth Road for easy access.", icon: MapPin },
              { title: "Quick Access", desc: "Immediate attention for basic treatments and injections.", icon: Activity },
              { title: "Family-Centered", desc: "Care plans designed for children, adults, and seniors.", icon: HeartPulse },
              { title: "Transparency", desc: "Clear communication about treatments and costs.", icon: ShieldCheck },
              { title: "24-Hour Support", desc: "Round-the-clock availability for peace of mind.", icon: Clock },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Key Services</h2>
                    <p className="text-gray-600">Comprehensive care for your everyday health needs.</p>
                </div>
                <Link to="/services" className="text-medical-600 font-semibold hover:text-medical-800 flex items-center gap-1 mt-4 md:mt-0">
                    View All Services <ArrowRight size={16} />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SERVICES.slice(0, 3).map((service) => (
                    <div key={service.id} className="group relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                            <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                            <p className="text-gray-200 text-sm line-clamp-2">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Activity Chart Section (Requirement for d3/recharts) */}
      <section className="py-16 bg-medical-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Our Community Daily</h2>
                    <p className="text-gray-600 mb-8">
                        Our commitment to Vidya Nagar and surrounding areas is reflected in our consistent patient care. We strive to minimize wait times and maximize care quality.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-medical-500 rounded-full" />
                            <span>Over 500+ happy families served</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-medical-500 rounded-full" />
                            <span>Average wait time under 15 minutes</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg h-80">
                    <h3 className="text-sm font-semibold text-gray-500 mb-4">Weekly Patient Volume (Est.)</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                            <Tooltip 
                                cursor={{fill: '#f0f9ff'}}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="patients" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={32} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Searching for “where to get quick medical treatment in Vidya Nagar Hubballi”?</h2>
          <p className="text-xl text-gray-400 mb-8">We are here to help. Walk-ins welcome for day care and consultations.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact" className="bg-medical-600 hover:bg-medical-500 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Contact Us Now
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;