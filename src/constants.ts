import { Product, Category, Review } from './types';

export const BUSINESS_NAME = "Flowers 'n Things";
export const CONTACT_PHONE = "+27 11 455 2000";
export const WHATSAPP_NUMBER = "27114552000";
export const ADDRESS = "124 Jan Smuts Ave, Johannesburg, 2196";
export const BUSINESS_EMAIL = "hello@flowersthing.co.za";

export const CATEGORIES: Category[] = [
  'Romance',
  'Birthday',
  'Sympathy',
  'Anniversary',
  'Gifts',
  'Corporate'
];

export const PRODUCTS: Product[] = [
  {
    id: 'red-rose-romance',
    name: 'Red Rose Romance',
    category: 'Romance',
    price: 450,
    description: 'A classic arrangement of 12 long-stemmed premium red roses, expertly wrapped with seasonal greenery. Perfect for expressing deep affection.',
    image: '/red_rose_romance_bouquet.png',
    isBestSeller: true,
    deliveryInfo: 'Same-day delivery available in Jo\'burg'
  },
  {
    id: 'birthday-bliss',
    name: 'Birthday Bliss',
    category: 'Birthday',
    price: 380,
    description: 'A bright and cheerful mix of sunflowers, pink carnations, and yellow daisies. Designed to bring joy to any birthday celebration.',
    image: 'https://images.unsplash.com/photo-1522673607200-1648482ce486?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    deliveryInfo: 'Same-day delivery available in Jo\'burg'
  },
  {
    id: 'peaceful-lilies',
    name: 'Peaceful White Lilies',
    category: 'Sympathy',
    price: 520,
    description: 'Scented white Stargazer lilies and white roses in a sleek glass vase. A respectful and elegant way to show your sympathy.',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be09fe?auto=format&fit=crop&q=80&w=800',
    deliveryInfo: 'Respectful same-day delivery across Johannesburg'
  },
  {
    id: 'anniversary-lux',
    name: 'Luxury Anniversary Basket',
    category: 'Anniversary',
    price: 850,
    description: 'An opulent arrangement of orchids, pastel roses, and seasonal berries in a luxury wicker basket. For unforgettable milestones.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&q=80&w=800',
    isBestSeller: true,
    deliveryInfo: 'Limited availability - order early'
  },
  {
    id: 'sunny-morning',
    name: 'Sunny Johannesburg Morning',
    category: 'Birthday',
    price: 295,
    description: 'Simple yet stunning sunflowers that reflect the Jo\'burg sun. A perfect "just because" gift or pick-me-up.',
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=800',
    deliveryInfo: 'Express same-day delivery'
  },
  {
    id: 'protea-pride',
    name: 'Protea Pride Bouquet',
    category: 'Gifts',
    price: 680,
    description: 'A uniquely South African arrangement featuring our national flower, the King Protea, paired with fynbos and fillers.',
    image: 'https://images.unsplash.com/photo-1606117331085-5760e3b58520?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    deliveryInfo: 'Specially sourced fresh today'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah J.',
    location: 'Sandton',
    rating: 5,
    comment: 'Best florist in Jo\'burg! The roses stayed fresh for over 10 days. Exceptional service and fast delivery.',
    date: '2024-04-12'
  },
  {
    id: '2',
    author: 'Thabo M.',
    location: 'Rosebank',
    rating: 5,
    comment: 'Ordered last minute for my anniversary and they saved the day. Beautiful bouquet and very professional.',
    date: '2024-03-28'
  },
  {
    id: '3',
    author: 'Leigh-Anne',
    location: 'Bedfordview',
    rating: 5,
    comment: 'Flowers \'n Things always delivers quality. Their Protea arrangements are my absolute favorite for gifting.',
    date: '2024-05-01'
  }
];
