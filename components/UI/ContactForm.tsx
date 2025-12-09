import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'General Consultation'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      // Basic validation simulation
      if (formData.name && formData.phone) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', service: 'General Consultation' });
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Request an Appointment</h3>
      
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Request Sent!</h4>
          <p className="text-gray-600">We will contact you shortly to confirm your appointment.</p>
          <button onClick={() => setStatus('idle')} className="mt-6 text-medical-600 font-medium hover:underline">Send another request</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
            >
              <option value="General Consultation">General Consultation</option>
              <option value="Day Care">Day Care Services</option>
              <option value="Minor Procedure">Minor Procedure</option>
              <option value="Health Checkup">Health Checkup</option>
              <option value="Emergency">Emergency Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Symptoms</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors"
              placeholder="Briefly describe your condition or requirements..."
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="flex items-center text-red-600 text-sm gap-2">
              <AlertCircle size={16} />
              <span>Please fill in all required fields.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-medical-600 hover:bg-medical-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending...' : (
              <>
                <Send size={18} /> Send Request
              </>
            )}
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting, you agree to be contacted by our medical team.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;