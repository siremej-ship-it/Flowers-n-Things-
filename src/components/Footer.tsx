import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { BUSINESS_NAME, ADDRESS, CONTACT_PHONE, BUSINESS_EMAIL, CATEGORIES } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-brand-text text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold tracking-tight font-sans">
              {BUSINESS_NAME}
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Johannesburg's premier florist since 1998. We specialize in locally sourced, fresh flowers and bespoke arrangements for every moment that matters.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold font-serif italic mb-6">Ocassions</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            {CATEGORIES.map(cat => (
              <li key={cat}>
                <Link to={`/shop?category=${cat}`} className="hover:text-white transition-colors">
                  {cat} Flowers
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold font-serif italic mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-primary shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-brand-primary shrink-0" />
              <span>{CONTACT_PHONE}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-brand-primary shrink-0" />
              <span>{BUSINESS_EMAIL}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Trust */}
        <div>
          <h4 className="text-lg font-bold font-serif italic mb-6">Same-Day Delivery</h4>
          <p className="text-gray-400 text-sm mb-4">
            Order before 3:00 PM for same-day delivery anywhere in Johannesburg.
          </p>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-1">Store Hours</p>
            <p className="text-sm">Mon - Fri: 8am - 6pm</p>
            <p className="text-sm">Sat: 8am - 2pm</p>
            <p className="text-sm">Sun: Closed (Events only)</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-1">
          Made with <Heart size={12} className="text-brand-primary fill-brand-primary" /> in Johannesburg
        </div>
        <div className="flex gap-6">
          <Link to="/faq" className="hover:text-white">Privacy Policy</Link>
          <Link to="/faq" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
