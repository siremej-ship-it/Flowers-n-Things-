import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') as Category | 'All' || 'All';
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const setCategory = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-brand-secondary min-h-screen">
      {/* Header section */}
      <section className="bg-white border-b border-rose-50 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block font-sans">Our Collection</span>
           <h1 className="text-4xl md:text-6xl font-bold font-serif italic text-brand-text mb-6">Explore Our <span className="text-brand-primary">Bouquets</span></h1>
           <p className="text-gray-500 max-w-2xl mx-auto italic">
             From deep red roses to vibrant sunflowers, we have the perfect arrangement for every Jo'burg occasion.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Categories Horizontal */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border font-sans
                  ${activeCategory === cat 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-md' 
                    : 'bg-white border-rose-100 text-gray-500 hover:border-brand-primary hover:text-brand-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 font-sans">
            <span>Showing {filteredProducts.length} Results</span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-xl text-gray-400 font-serif italic">No flowers found in this category. Try another one!</p>
          </div>
        )}
      </div>

      {/* Trust section */}
      <section className="bg-brand-text py-16 px-4 text-center text-white mt-24">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold font-serif italic mb-6">Need a custom arrangement?</h2>
           <p className="text-gray-400 mb-8 italic">Our master florists in Johannesburg can create something truly unique just for you. WhatsApp us your ideas!</p>
            <a 
              href={`https://wa.me/27114552000`}
              className="inline-flex bg-brand-accent text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs font-sans hover:opacity-90 transition-opacity"
            >
              Request Custom Bouquet
            </a>
        </div>
      </section>
    </div>
  );
};
