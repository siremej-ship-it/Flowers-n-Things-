import React from 'react';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';

// Minimal About Page
const About = () => (
  <div className="bg-brand-secondary min-h-screen pt-32 pb-24 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold font-serif italic text-brand-text mb-12 text-center">Our <span className="text-brand-primary">Blooming</span> Story</h1>
      <div className="aspect-video rounded-[3rem] overflow-hidden mb-12">
         <img src="https://images.unsplash.com/photo-1519225495810-75178319a13b?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl space-y-8 text-gray-600 leading-relaxed font-serif italic text-lg">
        <p>Founded in 1998 in the heart of Johannesburg, Flowers 'n Things began with a simple mission: to bring the freshest, most beautiful blooms to our local community with unmatched speed and heart.</p>
        <p>Our founder, Sarah Miller, believed that every bouquet is a story waiting to be told. Whether it's a romantic apology, a milestone celebration, or a quiet moment of sympathy, we hand-tie every arrangement with the same care we would give our own families.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-rose-100">
           <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 underline decoration-brand-primary decoration-2 underline-offset-8 italic">Locally Sourced</h3>
              <p className="text-base text-gray-500">We partner with local Jo'burg growers to ensure your flowers are cut fresh every morning.</p>
           </div>
           <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 underline decoration-brand-primary decoration-2 underline-offset-8 italic">Jo'burg Delivery</h3>
              <p className="text-base text-gray-500">Our own fleet of drivers knows every shortcut in Sandton, Soweto, and beyond.</p>
           </div>
        </div>
        <p>Today, we're proud to be Johannesburg's most trusted online florist, serving thousands of happy customers every year while remaining true to our artisanal roots.</p>
      </div>
    </div>
  </div>
);

// Minimal FAQ Page
const FAQ = () => (
  <div className="bg-brand-secondary min-h-screen pt-32 pb-24 px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold font-serif italic text-brand-text mb-12 text-center">Frequently Asked <span className="text-brand-primary">Questions</span></h1>
      <div className="space-y-6">
        {[
          { q: "Do you offer same-day delivery?", a: "Yes! Order before 3:00 PM Monday-Friday or 11:00 AM on Saturdays for same-day delivery anywhere in Johannesburg." },
          { q: "What areas of Johannesburg do you deliver to?", a: "We deliver to all major suburbs including Sandton, Rosebank, Randburg, Midrand, Soweto, and the East/West Rand." },
          { q: "How long will my flowers last?", a: "With proper care (changing water and trimming stems), our premium bouquets are guaranteed to stay fresh for at least 7-10 days." },
          { q: "Can I order via WhatsApp?", a: "Absolutely! We love chatting with our customers. Use the floating WhatsApp button to start your order instantly." },
          { q: "Do you do event flowers?", a: "Yes, we handle weddings, corporate events, and funerals. Please contact us via our form or WhatsApp for a bespoke quote." }
        ].map((faq, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm">
            <h3 className="text-xl font-bold font-serif italic text-brand-text mb-4">{faq.q}</h3>
            <p className="text-gray-500 leading-relaxed italic">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/occasions" element={<Shop />} /> {/* Reusing Shop for now, filtered by list */}
      </Routes>
    </Layout>
  );
}
