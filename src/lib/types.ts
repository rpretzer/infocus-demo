/**
 * TypeScript Types for Sanity Data
 */

export interface SanityImage {
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Address {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface Customer {
  _id: string;
  _type: 'customer';
  customerId: string;
  passwordHash: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: Address;
  createdAt: string;
}

export interface PhotoPricing {
  digital?: number;
  print4x6?: number;
  print5x7?: number;
  print8x10?: number;
  print11x14?: number;
  framed8x10?: number;
  framed11x14?: number;
}

export interface Photo {
  _id: string;
  _type: 'photo';
  image: SanityImage;
  title: string;
  description?: string;
  session?: {
    _ref: string;
    _type: 'reference';
  };
  category?: 'Weddings' | 'Portraits' | 'Events' | 'Other';
  featured?: boolean;
  publicGallery?: boolean;
  pricing?: PhotoPricing;
}

export interface PhotoSession {
  _id: string;
  _type: 'photoSession';
  sessionName: string;
  sessionId: {
    current: string;
  };
  customer: {
    _ref: string;
    _type: 'reference';
  };
  galleryPassword?: string;
  photos?: Array<{
    _ref: string;
    _type: 'reference';
  }>;
  sessionDate?: string;
  status: 'active' | 'archived';
  description?: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  pinterest?: string;
}

export interface BusinessHours {
  weekdays?: string;
  saturday?: string;
  sunday?: string;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteName: string;
  tagline?: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  socialLinks?: SocialLinks;
  businessHours?: BusinessHours;
  web3formsKey?: string;
}

// Cart and Order Types
export type ProductType = 'digital' | 'print' | 'framed';

export interface CartItem {
  id: string; // Unique cart item ID
  photoId: string;
  sessionId: string;
  photoTitle: string;
  thumbnail: string;
  productType: ProductType;
  size?: string;
  quantity: number;
  price: number;
}

export interface Cart {
  customerId: string;
  items: CartItem[];
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  customerId: string;
  customerName: string;
  expiresAt: number;
}
