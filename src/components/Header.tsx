import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_NAME, CONTACT_PHONE, WHATSAPP_NUMBER } from '../constants';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'Occasions', path: '/occasions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-rose-100 h-16 md:h-20">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-primary font-sans leading-none">
            {BUSINESS_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-500 uppercase tracking-widest font-sans">
          {navItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({ isActive }) => 
                `hover:text-brand-primary transition-colors pb-1 border-b-2 ${isActive ? 'border-brand-primary text-brand-primary' : 'border-transparent'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none">Call Jo'burg Shop</span>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-sm font-bold font-sans hover:text-brand-primary transition-colors">
              {CONTACT_PHONE}
            </a>
          </div>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex bg-brand-accent text-white px-5 py-2.5 rounded-full text-xs font-bold items-center gap-2 hover:opacity-90 transition-opacity shadow-md font-sans uppercase"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Us</span>
          </a>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-rose-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-lg font-bold text-gray-700 py-2 border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                 <a 
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg text-brand-text font-bold"
                >
                   <Phone size={18} /> Call Us
                </a>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-brand-accent py-3 rounded-lg text-white font-bold"
                >
                   <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
