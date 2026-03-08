export type Property = {
  id: string;
  title: string;
  slug: string;
  location: string;
  lat: number;
  lng: number;
  price: number;
  price_suffix: string;
  beds: number;
  baths: number;
  area: number;
  images: string[];
  tag: string;
  is_featured: boolean;
  status: 'For Sale' | 'For Rent';
  created_at: string;
};
