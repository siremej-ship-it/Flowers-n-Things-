import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Truck, ShieldCheck, Heart, MessageCircle, Star, ArrowLeft, Clock } from 'lucide-react';
import { PRODUCTS, CONTACT_PHONE, WHATSAPP_NUMBER } from '../constants';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-serif italic mb-4">Flower not found</h1>
        <Link to="/shop" className="text-brand-primary font-bold underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-secondary min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back link */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-primary mb-12 transition-colors font-sans"
        >
          <ArrowLeft size={16} /> Back to Browse
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32 space-y-6"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Gallery placeholder - simple circles */}
            <div className="flex gap-4">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="w-20 h-20 rounded-2xl bg-white border border-rose-100 p-1">
                    <img src={product.image} className="w-full h-full object-cover rounded-xl" />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em] font-sans">{product.category}</span>
                <span className="h-4 w-[1px] bg-rose-200" />
                <div className="flex gap-0.5 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-serif italic text-brand-text mb-4 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-3xl font-bold text-brand-primary font-sans mb-8">R {product.price}</p>
              
              <div className="bg-white p-6 rounded-2xl border border-rose-50 shadow-sm mb-8">
                 <p className="text-gray-600 leading-relaxed font-serif italic">
                  {product.description}
                </p>
              </div>

              {/* Urgency Box */}
              <div className="bg-brand-primary/5 border border-brand-primary/10 p-5 rounded-2xl mb-12 flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Clock size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-widest font-sans">Same-Day Delivery Available</p>
                    <p className="text-sm text-gray-600">Order in the next <span className="font-bold">2 hours</span> for today's delivery in Jo'burg.</p>
                 </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 mb-12">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in ordering the ${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-accent text-white w-full py-5 rounded-2xl text-lg font-bold font-sans uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl shadow-green-200 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle /> Order via WhatsApp
                </a>
                <button className="bg-brand-primary text-white w-full py-5 rounded-2xl text-lg font-bold font-sans uppercase tracking-[0.2em] shadow-xl shadow-rose-100 hover:bg-brand-primary/90 transition-all">
                  Direct Buy Now
                </button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-rose-100">
                <div className="flex items-start gap-4">
                  <Truck className="text-brand-primary shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold font-serif italic">Express Delivery</h4>
                    <p className="text-xs text-gray-500">Across all Jo'burg suburbs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-brand-primary shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold font-serif italic">Freshness Guaranteed</h4>
                    <p className="text-xs text-gray-500">Beautiful for 7-10 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="text-brand-primary shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold font-serif italic">Hand-Tied with Love</h4>
                    <p className="text-xs text-gray-500">By local skilled florists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="text-brand-primary shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold font-serif italic">Premium Grade</h4>
                    <p className="text-xs text-gray-500">Highest quality blooms</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Similar Products */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold font-serif italic mb-12 text-center text-brand-text">You might also like...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map(p => (
              <div key={p.id} className="scale-90">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-rose-50 h-full flex flex-col">
                  <Link to={`/product/${p.id}`} className="h-48">
                    <img src={p.image} className="w-full h-full object-cover" />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-serif italic font-bold text-sm mb-1">{p.name}</h3>
                    <p className="text-brand-primary font-sans font-bold text-sm">R {p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
