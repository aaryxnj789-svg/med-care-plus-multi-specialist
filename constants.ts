import { 
  Stethoscope, 
  Activity, 
  Syringe, 
  ClipboardCheck, 
  Users, 
  Clock, 
  Heart, 
  ShieldCheck, 
  Eye, 
  ThumbsUp 
} from 'lucide-react';
import { NavItem, ServiceItem, TestimonialItem, ValueItem } from './types';

export const APP_NAME = "Med Care Plus";
export const APP_TAGLINE = "Hubballi’s Trusted Neighborhood Healthcare Partner";

export const CONTACT_INFO = {
  address: "Silver Park, 951/4B, Devangpeth Road, Kori, Vidya Nagar, Bengeri Extension, Hubballi – 580023",
  phone: "+91-98440-XXXXX", // Updated placeholder structure
  email: "contact@medcareplus.com",
  timings: "Open 24 Hours",
  // Updated to include "Med Care Plus Multi Speciality Clinic" in the query so the pin shows the business name
  googleMapsUrl: "https://maps.google.com/maps?q=Med+Care+Plus+Multi+Speciality+Clinic%2C+Silver+Park%2C+951%2F4B%2C+Devangpeth+Road%2C+Kori%2C+Vidya+Nagar%2C+Bengeri+Extension%2C+Hubballi+%E2%80%93+580023&t=&z=15&ie=UTF8&iwloc=&output=embed" 
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultations',
    title: 'General Medical Consultations',
    description: 'Evaluation and treatment for common illnesses, routine health concerns, and general wellness.',
    icon: Stethoscope,
    details: ['Routine Health Checkups', 'Viral Fever Treatment', 'Chronic Disease Management', 'Wellness Advice'],
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'day-care',
    title: 'Day Care Services',
    description: 'Short-term observation, IV fluids, injections, and minor procedures without hospital admission.',
    icon: Activity,
    details: ['IV Fluid Administration', 'Nebulization', 'Observation Beds', 'Post-procedure Recovery'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&q=80&w=600' // Dedicated Day Care Image
  },
  {
    id: 'minor-procedures',
    title: 'Minor Procedures',
    description: 'Simple medical treatments performed with care and precision.',
    icon: Syringe,
    details: ['Wound Dressing', 'Suturing', 'Injection Services', 'Catheterization'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'health-checkup',
    title: 'Health Checkup Packages',
    description: 'Basic health assessments for routine evaluation and early detection.',
    icon: ClipboardCheck,
    details: ['Blood Pressure Monitoring', 'Blood Sugar Checks', 'BMI Assessment', 'Basic Pathology'],
    image: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'family-care',
    title: 'Family-Centered Care',
    description: 'Medical support for patients of all ages — children, adults, and seniors.',
    icon: Users,
    details: ['Pediatric Consultations', 'Geriatric Care', 'Adult General Medicine', 'Family Health Planning'],
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'emergency',
    title: 'Emergency-Style Support',
    description: 'Walk-in support for non-critical urgent care needs.',
    icon: Clock,
    details: ['First Aid', 'Acute Pain Management', 'Dehydration Treatment', 'Allergic Reactions'],
    image: 'https://images.unsplash.com/photo-1516574187841-693018f33663?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'A convenient and helpful clinic in Vidya Nagar. The staff was supportive, and the treatment process was smooth.',
    author: 'Resident',
    role: 'Vidya Nagar'
  },
  {
    id: '2',
    quote: 'Good place for basic healthcare needs. Helpful for injections and minor procedures.',
    author: 'Local Patient',
    role: 'Bengeri Extension'
  },
  {
    id: '3',
    quote: 'Easy to reach and open when most other clinics weren’t. Very useful for quick medical help in our neighborhood.',
    author: 'Parent',
    role: 'Devangpeth Road'
  },
  {
    id: '4',
    quote: 'The doctors were polite and explained the treatment well. A reliable clinic for families.',
    author: 'Satisfied Patient',
    role: 'Hubballi'
  }
];

export const VALUES: ValueItem[] = [
  {
    title: 'Compassion',
    description: 'Treating every patient with kindness and empathy.',
    icon: Heart
  },
  {
    title: 'Accessibility',
    description: 'Ensuring healthcare is within reach for our community.',
    icon: Users
  },
  {
    title: 'Quality Service',
    description: 'Delivering reliable treatments and medical advice.',
    icon: ThumbsUp
  },
  {
    title: 'Transparency',
    description: 'Open communication regarding treatments and costs.',
    icon: Eye
  }
];