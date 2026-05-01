export type Category = 'Romance' | 'Birthday' | 'Sympathy' | 'Anniversary' | 'Gifts' | 'Corporate';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  isBestSeller?: boolean;
  isPopular?: boolean;
  deliveryInfo: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}
