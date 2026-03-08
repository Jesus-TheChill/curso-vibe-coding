import { supabase } from "./supabase";
import { Property } from "./types";

export const LISTINGS_PER_PAGE = 8;

export type PaginatedProperties = {
  data: Property[];
  count: number;
  totalPages: number;
};

export async function getListings(page: number = 1): Promise<PaginatedProperties> {
  const from = (page - 1) * LISTINGS_PER_PAGE;
  const to = from + LISTINGS_PER_PAGE - 1;

  const { data, error, count } = await supabase
    .from("properties")
    .select("*", { count: "exact" })
    .eq("is_featured", false)
    .order("created_at", { ascending: true })
    .range(from, to);

  if (error) {
    console.error("Error fetching properties:", error.message);
    return { data: [], count: 0, totalPages: 0 };
  }

  const totalCount = count ?? 0;
  const totalPages = Math.ceil(totalCount / LISTINGS_PER_PAGE);

  return {
    data: (data as Property[]) ?? [],
    count: totalCount,
    totalPages,
  };
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("is_featured", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching featured properties:", error.message);
    return [];
  }

  return (data as Property[]) ?? [];
}
