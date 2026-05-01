import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-rose-50 flex flex-col group h-full"
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative h-64 md:h-72 overflow-hidden block">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-yellow-400 text-brand-text text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
            Best Seller
          </span>
        )}
        {product.isPopular && (
          <span className="absolute top-4 left-4 bg-rose-100 text-brand-primary text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
            Popular
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1 italic">{product.category}</p>
            <h3 className="text-xl font-bold font-serif italic text-brand-text group-hover:text-brand-primary transition-colors">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
          </div>
          <p className="text-lg font-bold text-brand-primary font-sans">R {product.price}</p>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto space-y-3">
          <Link 
            to={`/product/${product.id}`}
            className="w-full bg-brand-text text-white py-3 rounded-xl text-xs font-bold font-sans uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors"
          >
            Buy Now
            <ArrowRight size={14} />
          </Link>
          
          <div className="flex items-center gap-2 text-[10px] text-green-600 font-bold justify-center uppercase tracking-tighter">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Same-day delivery in Jo'burg
          </div>
        </div>
      </div>
    </motion.div>
  );
};
