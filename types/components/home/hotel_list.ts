import { StaticImageData } from "next/image";

export interface HotelListProps {
  searchQuery: string;
}

export interface HotelBrand {
  id: string;
  name: string;
  hotels: Hotel[];
}

export interface Hotel {
  id: string;
  img?: StaticImageData | string;
  name: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  brand: string;
}