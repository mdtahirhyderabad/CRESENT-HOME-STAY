export interface Room {
  id: string;
  name: string;
  pricePerNight: number;
  maxGuests: number;
  bedType: string;
  sizeSqFt: number;
  viewDescription: string;
  summary: string;
  amenities: string[];
  image: string;
  images?: string[];
  bathroomImage?: string;
  featured?: boolean;
}

export interface FoodItem {
  id: string;
  name: string;
  kashmiriName?: string;
  category: 'breakfast' | 'wazwan_nonveg' | 'vegetarian' | 'beverages';
  price: number;
  isVeg: boolean;
  isSpecialty?: boolean;
  description: string;
  servingInfo: string;
}

export interface TaxiRoute {
  id: string;
  destination: string;
  distanceKm: string;
  duration: string;
  maxiCabPrice: number;
  innovaPrice: number;
  highlights: string[];
  description: string;
}

export interface GuestReview {
  id: string;
  guestName: string;
  city: string;
  date: string;
  rating: number;
  roomStayed: string;
  comment: string;
  highlight: string;
}

export interface BookingDetails {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  roomsCount: number;
  mealPlan: 'room_only' | 'breakfast' | 'half_board' | 'full_board';
  taxiAddon: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}
