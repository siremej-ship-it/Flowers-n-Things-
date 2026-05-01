import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, CONTACT_PHONE, REVIEWS, WHATSAPP_NUMBER } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller || p.isPopular).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* BG Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful Roses" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/95 via-brand-secondary/80 to-transparent md:to-brand-secondary/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 py-12 md:py-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block bg-rose-100 px-4 py-1.5 rounded-full border border-rose-200"
            >
              <span className="text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-[0.2em] font-sans">
                Same-Day Johannesburg Delivery
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl leading-[1.1] font-bold text-brand-text mb-8 italic"
            >
              Beautiful Flowers <span className="text-brand-primary underline decoration-rose-200 underline-offset-8">Delivered Today</span> in Johannesburg 🌹
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-serif italic"
            >
              Fresh roses, bespoke bouquets & thoughtful gifts for every occasion. Hand-picked, hand-tied, and hand-delivered since 1998.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/shop" 
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-primary/90 transition-all font-sans uppercase tracking-widest text-center"
              >
                Order Now
              </Link>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="border-2 border-brand-text text-brand-text px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-text hover:text-white transition-all font-sans uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageCircle /> WhatsApp We
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-8 items-center border-t border-rose-100 pt-8"
            >
              <div className="text-center">
                <p className="text-3xl font-bold font-serif italic mb-1">4.9/5</p>
                <div className="flex gap-0.5 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-gray-400 font-sans">Google Reviews</p>
              </div>
              <div className="h-12 w-[1px] bg-rose-100 hidden sm:block" />
              <div className="max-w-xs">
                <p className="text-xs italic text-gray-500 leading-relaxed">
                  "Best florist in Jo'burg! The roses stayed fresh for 10 days. My wife was absolutely thrilled."
                </p>
                <p className="text-[10px] font-bold mt-2 text-brand-primary font-sans uppercase">— Sarah J., Sandton</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-text py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Truck, title: 'Same-Day Delivery', desc: 'Order before 3pm' },
            { icon: ShieldCheck, title: 'Freshness Guarantee', desc: '10 day freshness' },
            { icon: Star, title: 'Premium Quality', desc: 'Hand-picked daily' },
            { icon: Heart, title: 'Local Florist', desc: 'Proudly Jo\'burg' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <item.icon className="text-brand-primary mb-4 transition-transform group-hover:scale-110" size={32} />
              <h3 className="text-white font-bold font-sans uppercase tracking-widest text-xs mb-1">{item.title}</h3>
              <p className="text-gray-400 text-[10px] uppercase tracking-tighter">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block font-sans">Most Loved Right Now</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif italic text-brand-text">Local Favorites & <span className="text-brand-primary">Best Sellers</span></h2>
            </div>
            <Link to="/shop" className="text-brand-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform font-sans uppercase tracking-widest text-sm">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Occasions */}
      <section className="py-24 px-4 bg-brand-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif italic text-brand-text mb-4">Shop by Occasion</h2>
            <p className="text-gray-500 max-w-xl mx-auto italic">Whatever the moment, we have the perfect petals to express exactly how you feel.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: 'Romantic Roses', cat: 'Romance', img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa', icon: '❤️' },
               { name: 'Birthday Bliss', cat: 'Birthday', img: 'https://images.unsplash.com/photo-1522673607200-1648482ce486', icon: '🎂' },
               { name: 'Pure Sympathy', cat: 'Sympathy', img: 'https://images.unsplash.com/photo-1563241527-3004b7be09fe', icon: '🕊️' }
             ].map((occ, i) => (
                <Link 
                  key={i} 
                  to={`/shop?category=${occ.cat}`}
                  className="relative h-96 group overflow-hidden rounded-3xl"
                >
                  <img src={occ.img} alt={occ.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-text/40 group-hover:bg-brand-text/20 transition-colors" />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
                    <span className="text-4xl mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{occ.icon}</span>
                    <h3 className="text-2xl font-bold text-white font-serif italic">{occ.name}</h3>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-2 font-sans">Shop Now</p>
                  </div>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif italic text-brand-text mb-4">What Our Customers Say</h2>
            <p className="text-gray-500 max-w-xl mx-auto italic">Real emotions from real Jo'burgers who trust us with their special moments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-brand-secondary p-8 rounded-3xl border border-rose-50 flex flex-col shadow-sm">
                <div className="flex gap-0.5 text-yellow-500 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-brand-text mb-6 italic leading-relaxed">"{review.comment}"</p>
                <div className="mt-auto">
                  <p className="font-bold font-sans text-xs uppercase tracking-widest text-brand-primary">{review.author}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{review.location}, Johannesburg</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Star size={200} />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8"
            >
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Order before 3:00 PM</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif italic mb-8">Ready to make someone's day special?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto italic">
              Don't wait! Our local Jo'burg florists are ready to craft your perfect bouquet right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/shop" 
                className="bg-white text-brand-primary px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-gray-100 transition-all font-sans uppercase tracking-widest"
              >
                Start Shop
              </Link>
               <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-brand-accent text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:opacity-90 transition-all font-sans uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageCircle /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
