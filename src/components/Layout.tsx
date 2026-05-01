import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-rose-100 p-3 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <a 
          href={`tel:27114552000`}
          className="flex-1 bg-white border-2 border-brand-primary text-brand-primary py-3 rounded-xl font-bold flex items-center justify-center text-sm uppercase tracking-wider"
        >
          Call Shop
        </a>
        <a 
          href="/shop"
          className="flex-[2] bg-brand-primary text-white py-3 rounded-xl font-bold flex items-center justify-center text-sm uppercase tracking-wider shadow-lg"
        >
          Order Online
        </a>
      </div>
    </div>
  );
};
