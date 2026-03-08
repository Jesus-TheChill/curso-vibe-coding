export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  price_suffix: string | null;
  beds: number;
  baths: number;
  area: string;
  image_url: string;
  status: "FOR SALE" | "FOR RENT";
  tag: string | null;
  is_featured: boolean;
  created_at: string;
};
