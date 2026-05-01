import React from 'react';
import { ADDRESS, CONTACT_PHONE, BUSINESS_EMAIL, WHATSAPP_NUMBER } from '../constants';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <div className="bg-brand-secondary min-h-screen">
      <section className="bg-white pt-32 pb-16 px-4 border-b border-rose-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block font-sans">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif italic text-brand-text mb-6">We'd Love to <span className="text-brand-primary">Hear From You</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Whether you need a custom event arrangement or have a question about delivery, our Johannesburg team is here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
               <h2 className="text-3xl font-bold font-serif italic mb-8">Contact Information</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm border border-rose-100">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans">Call Us</p>
                      <p className="font-bold font-sans text-brand-text">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm border border-rose-100">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans">WhatsApp</p>
                      <p className="font-bold font-sans text-brand-text">27 11 455 2000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm border border-rose-100">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans">Email Us</p>
                      <p className="font-bold font-sans text-brand-text underline">{BUSINESS_EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm border border-rose-100">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans">Studio Hours</p>
                      <p className="font-bold font-sans text-brand-text">Mon - Fri: 8am - 6pm</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm">
               <div className="flex gap-4 mb-6">
                 <MapPin className="text-brand-primary shrink-0" size={32} />
                 <div>
                   <h3 className="text-xl font-bold font-serif italic">Find Us In Jo'burg</h3>
                   <p className="text-gray-500 text-sm mt-1">{ADDRESS}</p>
                 </div>
               </div>
               {/* Embed Placeholder */}
               <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden grayscale">
                  <div className="text-center p-8">
                     <p className="text-sm font-bold text-gray-400 uppercase tracking-widest font-sans mb-2">Google Maps Integrated</p>
                     <p className="text-xs text-gray-400 italic">Visit our artisanal studio in the heart of Johannesburg.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-rose-100 shadow-xl">
             <h2 className="text-3xl font-bold font-serif italic mb-8">Send Us a Message</h2>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans ml-1">Your Name</label>
                   <input type="text" className="w-full bg-brand-secondary border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary/20 transition-all font-sans text-sm" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans ml-1">Email Address</label>
                   <input type="email" className="w-full bg-brand-secondary border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary/20 transition-all font-sans text-sm" placeholder="john@example.com" />
                 </div>
               </div>
               <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans ml-1">Subject</label>
                   <input type="text" className="w-full bg-brand-secondary border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary/20 transition-all font-sans text-sm" placeholder="Custom arrangement request" />
                 </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-sans ml-1">Your Message</label>
                 <textarea rows={5} className="w-full bg-brand-secondary border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-primary/20 transition-all font-sans text-sm" placeholder="How can we help?"></textarea>
               </div>
               <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold font-sans uppercase tracking-[0.2em] shadow-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2">
                 <Send size={18} /> Send Inquiry Now
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};
