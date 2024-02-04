import { supabase } from "./supabase"
import { house } from "./types";

export async function fetchHouses(){

  const { data, error } = await supabase
  .from('houses')
  .select("");

  if (error) {
    console.error('Error fetching houses:', error);
    return [];
  }

  return normalizeHousesData(data || []);
}

export async function fetchSingleHouse(id: string): Promise<house | null> {
  const { data, error } = await supabase.from('houses').select("").eq("id", id);

  if (error) {
    console.error('Error fetching house:', error);
    return null;
  }

  return data ? normalizeHouseData(data[0]) : null;
}

function normalizeHousesData(data: any[]): Array<house> {
  return data.map(normalizeHouseData);
}

function normalizeHouseData(houseData: any): house {
  return {
    id: houseData.id,
    location: houseData.location || "",
    price: houseData.price || "",
    cover_image: houseData.cover_image || "",
    images: houseData.images || [],
    description: houseData.description || "",
    sold: houseData.sold || false,
    date_added: new Date(houseData.date_added),
    phone: houseData.phone || "",
  };
}