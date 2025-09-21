export enum Page {
  Home = 'Home',
  Menu = 'Menu',
  Outlets = 'Outlets',
  Promotions = 'Promotions',
  Testimonials = 'Testimonials',
  Careers = 'Careers',
  About = 'About',
  Contact = 'Contact',
  // FIX: Add ImageGenerator page to the Page enum.
  ImageGenerator = 'ImageGenerator',
  ImageGallery = 'ImageGallery',
  Features = 'Features',
}

export type Category = 'Krispy' | 'Klasik' | 'Side Dish';
export type SetType = 'A' | 'B' | 'C';

export interface MenuItem {
  id: string;
  category: Category;
  set?: SetType;
  name: string;
  description: string;
  price: number;
  price2pcs?: number;
  imageUrl: string;
}

export interface Outlet {
  id:string;
  name: string;
  address: string;
  hours: string;
  mapsUrl: string;
  wazeUrl: string;
  whatsappUrl: string;
  lat: number;
  lng: number;
}

export interface Promotion {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    countdown?: string; // ISO 8601 date string
}

export interface SpiceLevel {
    name: string;
    level: number;
}

export interface JobOpening {
    id: string;
    title: string;
    location: string;
    positions: string[];
    benefits: string[];
    contact: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
}

export type Language = 'bm' | 'en';