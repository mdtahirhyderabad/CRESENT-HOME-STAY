import { Room, FoodItem, TaxiRoute, GuestReview } from '../types/homestay';

export const HERO_IMAGE = '/src/assets/images/crescent_homestay_hero_1793632253789.jpg';
export const FOOD_IMAGE = '/src/assets/images/kashmiri_dining_cuisine_1793632254737.jpg';
export const TAXI_IMAGE = '/src/assets/images/maxi_cab_srinagar_tour_1793632255880.jpg';

// Actual Real Photographs of Crescent Homestay Rooms & Bathrooms
export const ROOM_ROYAL_SUITE = '/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.46.14_PM_299fdc33.jpeg';
export const ROOM_SUPERIOR = '/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.46.49_PM_1b48f600.jpeg';
export const ROOM_DELUXE = '/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.46.51_PM_f24d0f71.jpeg';
export const BATHROOM_GEYSER = '/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.46.50_PM_3ed2b1c7.jpeg';
export const BATHROOM_SHOWER = '/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.46.51_PM__1__28adf6ff.jpeg';

export const HOMESTAY_CONTACT = {
  name: 'Crescent Homestay',
  tagline: 'Beside the Tranquil Waters of Dal Lake, Srinagar',
  phone: '9103804493',
  displayPhone: '+91 9103804493',
  whatsapp: '+919103804493',
  email: 'reservations@crescenthomestaysrinagar.com',
  address: 'Dal Lake Srinagar, Pedestrian Mall Road, near Hotel Heaven Canal, Srinagar, Jammu & Kashmir 190001',
  locationDetails: 'Pedestrian Mall Road near Hotel Heaven Canal, facing Dal Lake and Shankaracharya volcanic hill',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  minRate: 1800,
  maxRate: 2600,
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-lake-view',
    name: 'Deluxe Cedar Room',
    pricePerNight: 1800,
    maxGuests: 2,
    bedType: 'Queen Cedar Bed',
    sizeSqFt: 220,
    viewDescription: 'Wide scenic windows with volcanic mountain & garden vista',
    summary: 'A cozy room with handcrafted Kashmiri wooden bed, warm quilt, elegant drapery, and a private modern en-suite bathroom with 24/7 hot geyser.',
    amenities: [
      'High-Speed Free Wi-Fi (100 Mbps)',
      'Modern Attached Bathroom with Shower',
      '24/7 Running Hot Water (Geyser)',
      'Electric Blanket & Thermal Quilt',
      'Electric Kettle with Tea & Kahwa Setup',
      'Handcrafted Wooden Bed & Headboard',
      'Carved Wooden Door & Western Toilet',
    ],
    image: ROOM_DELUXE,
    bathroomImage: BATHROOM_SHOWER,
    images: [ROOM_DELUXE, BATHROOM_SHOWER],
    featured: false,
  },
  {
    id: 'superior-volcanic-view',
    name: 'Superior Volcanic Hill Room',
    pricePerNight: 2200,
    maxGuests: 3,
    bedType: 'King Teak Bed + Day Lounger',
    sizeSqFt: 290,
    viewDescription: 'Corner panorama framing the historic volcanic Shankaracharya hill peak',
    summary: 'Bright and spacious bedroom with wide double-drape windows, plush floral bedding with electric warmer, bedside stand, and private bathroom with Polo geyser.',
    amenities: [
      'High-Speed Free Wi-Fi (100 Mbps)',
      'Large Double-Curtain View Windows',
      'Modern En-Suite Bath with Polo Geyser',
      'Room Heater & Electric Bed Warmer',
      '24/7 Hot Water & Western Commode',
      'Marble Tile Flooring & Ceramic Washbasin',
      'Complimentary Saffron Kahwa Service',
    ],
    image: ROOM_SUPERIOR,
    bathroomImage: BATHROOM_GEYSER,
    images: [ROOM_SUPERIOR, BATHROOM_GEYSER],
    featured: true,
  },
  {
    id: 'panoramic-royal-suite',
    name: 'Royal Volcanic Balcony Suite',
    pricePerNight: 2600,
    maxGuests: 4,
    bedType: 'King Royal Bed + Extra Sofa Bed',
    sizeSqFt: 380,
    viewDescription: 'Private carved wooden balcony with 180° uninterrupted volcanic mountain panorama',
    summary: 'Our premier suite featuring rich royal damask wall styling, upholstered tufted headboard, sunny view windows, ceiling fan, and modern en-suite bath with 24/7 hot geyser.',
    amenities: [
      'Royal Damask Wall Design & Tufted Headboard',
      'Private Handcrafted Wooden Balcony',
      '180° Whole View of Volcanic Shankaracharya Peak',
      'Attached En-Suite Bath with 24/7 Hot Geyser',
      'High-Speed Free Wi-Fi (100 Mbps)',
      'Electric Bed Warmer & Room Heater',
      'Polo Geyser, Mirror, Washbasin & Jet Spray',
      'Dining Table for In-Room Meals',
    ],
    image: ROOM_ROYAL_SUITE,
    bathroomImage: BATHROOM_GEYSER,
    images: [ROOM_ROYAL_SUITE, BATHROOM_GEYSER, BATHROOM_SHOWER],
    featured: false,
  },
];

export const FOOD_MENU: FoodItem[] = [
  // Special Grand Thali
  {
    id: 'kashmiri-thali',
    name: 'Royal Kashmiri Thali Feast',
    kashmiriName: 'Shahi Koshur Thali',
    category: 'wazwan_nonveg',
    price: 999,
    isVeg: false,
    isSpecialty: true,
    description: 'Our signature grand feast: Rogan Josh, Yakhni, Dum Aloo, Haakh greens, saffron basmati rice, walnut chutney, and Kashmiri Tchot bread.',
    servingInfo: 'Complete royal platter served lakeside',
  },

  // Wazwan & Non-Veg Specialities
  {
    id: 'rogan-josh',
    name: 'Traditional Kashmiri Rogan Josh',
    kashmiriName: 'Koshur Rogan Josh',
    category: 'wazwan_nonveg',
    price: 400,
    isVeg: false,
    isSpecialty: true,
    description: 'Tender Kashmiri mutton slow-cooked in aromatic gravy infused with Kashmiri red chillies, dried ginger, and wild fennel.',
    servingInfo: 'Serves 1-2 with fragrant Basmati rice or fresh bread',
  },
  {
    id: 'kashmiri-yakhni',
    name: 'Authentic Kashmiri Yakhni',
    kashmiriName: 'Mutton / Nadru Yakhni',
    category: 'wazwan_nonveg',
    price: 400,
    isVeg: false,
    isSpecialty: true,
    description: 'Tender mutton pieces or fresh lotus stem simmered delicately in a rich, fragrant yogurt and saffron gravy infused with green cardamom and dry mint.',
    servingInfo: 'Mild, velvety and exquisitely flavored',
  },
  {
    id: 'dal-lake-trout',
    name: 'Fresh Dal Lake Pan-Fried Trout',
    kashmiriName: 'Gaad fry',
    category: 'wazwan_nonveg',
    price: 500,
    isVeg: false,
    isSpecialty: true,
    description: 'Fresh mountain trout caught from clean Himalayan waters, pan-seared with Kashmiri spices, lemon, and wild herbs.',
    servingInfo: 'Served with walnut radish chutney and steamed rice',
  },

  // Vegetarian Specialties
  {
    id: 'kashmiri-dum-aloo',
    name: 'Authentic Kashmiri Dum Aloo',
    kashmiriName: 'Dam Oluv',
    category: 'vegetarian',
    price: 600,
    isVeg: true,
    isSpecialty: true,
    description: 'Crispy fried baby potatoes slow-cooked on traditional "dum" in a rich, velvety curd gravy infused with Kashmiri spices, hing, and wild fennel.',
    servingInfo: 'Generous homestyle portion with steamed basmati rice',
  },
  {
    id: 'kashmiri-haakh',
    name: 'Fresh Kashmiri Haakh Greens',
    kashmiriName: 'Haakh',
    category: 'vegetarian',
    price: 220,
    isVeg: true,
    description: 'Tender local collard greens simmered lightly in mustard oil with a whole green chili and pinch of asafoetida. The quintessential Kashmiri staple.',
    servingInfo: 'Light, wholesome and comforting',
  },

  // Breakfast & Breads
  {
    id: 'kashmiri-traditional-breakfast',
    name: 'Kashmiri Morning Breakfast Platter',
    kashmiriName: 'Subah Ka Nashta',
    category: 'breakfast',
    price: 250,
    isVeg: true,
    isSpecialty: true,
    description: 'Hot crisp Kashmiri Tchot / Girda bread fresh from the neighborhood kandur bakery, Amul butter, apricot jam, 2 eggs (to order) or stuffed paratha, and hot Kahwa.',
    servingInfo: 'Served lakeside on the sun terrace',
  },
  {
    id: 'stuffed-aloo-paratha',
    name: 'Tawa Aloo & Paneer Parathas',
    category: 'breakfast',
    price: 180,
    isVeg: true,
    description: 'Two piping hot buttered whole-wheat flatbreads stuffed with spiced potatoes and cottage cheese, served with fresh curd and pickle.',
    servingInfo: 'Available daily 7:30 AM to 10:30 AM',
  },

  // Beverages & Kahwa
  {
    id: 'saffron-kahwa',
    name: 'Kashmiri Saffron Kahwa',
    kashmiriName: 'Moghel Kehwa',
    category: 'beverages',
    price: 60,
    isVeg: true,
    isSpecialty: true,
    description: 'Traditional Kashmiri green tea slow-boiled in our copper samovar with Kashmiri saffron, cinnamon, green cardamom, and slivered almonds.',
    servingInfo: 'Hot steaming cup freshly brewed',
  },
  {
    id: 'noon-chai-pink',
    name: 'Noon Chai Pink (Kashmiri Salt Tea)',
    kashmiriName: 'Sheer Chai',
    category: 'beverages',
    price: 60,
    isVeg: true,
    isSpecialty: true,
    description: 'Iconic salty pink tea brewed with green tea leaves, baking soda, milk, and crushed walnuts. Accompanied by crisp traditional bakery bread.',
    servingInfo: 'Kashmir\'s signature morning and evening pink brew',
  },
  {
    id: 'milk-tea',
    name: 'Hot Fresh Milk Tea',
    kashmiriName: 'Doodh Chai',
    category: 'beverages',
    price: 20,
    isVeg: true,
    description: 'Freshly prepared rich homestyle milk tea boiled with ginger and crushed green cardamom.',
    servingInfo: 'Piping hot 1 cup',
  },
];

export const MAXI_CAB_DAY_RATE = 3000;
export const MEAL_PLAN_RATE = 999;

export const TAXI_FLEET: TaxiRoute[] = [
  {
    id: 'srinagar-heritage-gardens',
    destination: 'Full-Day Srinagar City & Mughal Gardens Tour',
    distanceKm: '35 km circuit',
    duration: 'Full Day (8 Hours)',
    maxiCabPrice: 3000,
    innovaPrice: 2500,
    highlights: [
      'Nishat & Shalimar Mughal Gardens',
      'Pari Mahal (Palace of Fairies)',
      'Volcanic Shankaracharya Hilltop Temple',
      'Hazratbal Shrine & Old City Jamia Masjid',
    ],
    description: 'Explore the royal Mughal gardens along the Dal Lake shoreline, majestic hilltop viewpoints, and historic wooden bridges of Old Srinagar.',
  },
  {
    id: 'gulmarg-day-excursion',
    destination: 'Full-Day Gulmarg Meadow & Gondola Tour',
    distanceKm: '54 km one way',
    duration: 'Full Day (8:30 AM - 6:30 PM)',
    maxiCabPrice: 3000,
    innovaPrice: 2500,
    highlights: [
      'World\'s highest Gondola cable car ride',
      'Snow meadows of Apharwat peak',
      'Historic St. Mary\'s Church & Golf course',
      'En-route Tangmarg apple orchards stop',
    ],
    description: 'Comfortable day trip in our heated Maxi cab / Innova to the world-renowned snow paradise of Gulmarg. Driver assists with Gondola timings.',
  },
  {
    id: 'pahalgam-valley-tour',
    destination: 'Full-Day Pahalgam & Betaab Valley Excursion',
    distanceKm: '92 km one way',
    duration: 'Full Day (7:30 AM - 7:30 PM)',
    maxiCabPrice: 3000,
    innovaPrice: 2500,
    highlights: [
      'Pampore saffron fields en-route',
      'Lidder river roaring riverside halts',
      'Betaab Valley, Aru Valley & Chandanwari',
      'Apple orchards of Anantnag',
    ],
    description: 'Scenic journey through the saffron capital and alongside the turquoise Lidder river into the pine forests and shepherd valleys of Pahalgam.',
  },
  {
    id: 'sonamarg-glacier-drive',
    destination: 'Full-Day Sonamarg & Thajiwas Glacier Tour',
    distanceKm: '82 km one way',
    duration: 'Full Day (8:00 AM - 7:00 PM)',
    maxiCabPrice: 3000,
    innovaPrice: 2500,
    highlights: [
      'Sindh river cascading gorge route',
      'Thajiwas Glacier snow sledge views',
      'Gateway to Ladakh mountain pass',
      'Pristine trout fishing viewpoints',
    ],
    description: 'The golden meadow nestled between craggy snow pinnacles and roaring glacier torrents. Exceptional photography route.',
  },
  {
    id: 'doodhpathri-meadow',
    destination: 'Full-Day Doodhpathri (Valley of Milk) Tour',
    distanceKm: '44 km one way',
    duration: 'Full Day (9:00 AM - 5:30 PM)',
    maxiCabPrice: 3000,
    innovaPrice: 2500,
    highlights: [
      'Shaliganga river rolling over smooth stones',
      'Untouched rolling velvet green meadows',
      'Peaceful pine forests away from commercial crowds',
      'Fresh local tea and corn by the brook',
    ],
    description: 'An offbeat paradise of untouched pine meadows and gushing streams known as the Valley of Milk, perfect for tranquil picnics.',
  },
  {
    id: 'airport-transfer',
    destination: 'Srinagar Airport (SXR) Transfer',
    distanceKm: '18 km',
    duration: '35 - 45 mins',
    maxiCabPrice: 1600,
    innovaPrice: 1200,
    highlights: ['Terminal pick-up with name placard', 'Boulevard scenic drive', 'Luggage assistance included'],
    description: 'Prompt airport pick-and-drop service right at Crescent Homestay lakeside doorstep with comfortable air-conditioned vehicle.',
  },
];

export const REVIEWS: GuestReview[] = [
  {
    id: 'rev-1',
    guestName: 'Rohit & Ananya Verma',
    city: 'Bengaluru, India',
    date: 'October 2026',
    rating: 5,
    roomStayed: 'Royal Volcanic Balcony Suite',
    highlight: 'Unbeatable volcanic mountain view right outside the bed',
    comment: 'The whole view of the volcanic Shankaracharya mountain right from our private balcony was magical! Waking up to the morning mist and drinking a hot cup of saffron Kahwa was unforgettable. The Rogan Josh cooked by the family was ten times better than expensive restaurants. Tariffs at ₹2,600 are an unbelievable bargain.',
  },
  {
    id: 'rev-2',
    guestName: 'Dr. Tariq & Farida Hameed',
    city: 'Hyderabad, India',
    date: 'September 2026',
    rating: 5,
    roomStayed: 'Superior Volcanic Hill Room',
    highlight: 'Reliable Maxi cab service & super fast Wi-Fi',
    comment: 'We stayed for 4 nights. The Maxi cab was arranged right on time for our airport pickup and trips to Gulmarg and Pahalgam. The driver Farooq was so gentle and knew the best scenic stops. Free Wi-Fi worked smoothly for my office meetings. The electric bed warmer kept us super cozy.',
  },
  {
    id: 'rev-3',
    guestName: 'Claire & Julien Moreau',
    city: 'Lyon, France',
    date: 'August 2026',
    rating: 5,
    roomStayed: 'Deluxe Cedar Room',
    highlight: 'Authentic Kashmiri warmth and delicious home food',
    comment: 'Crescent Homestay is pure serenity. At ₹1,800/night with clean modern hot water and spotless wooden interiors, you cannot find a better stay in Srinagar. The hosts treated us like personal guests, offering hot tea and preparing delicious food. 10/10 recommendation.',
  },
  {
    id: 'rev-4',
    guestName: 'Siddharth Mehra',
    city: 'Mumbai, India',
    date: 'June 2026',
    rating: 5,
    roomStayed: 'Royal Volcanic Balcony Suite',
    highlight: 'Panoramic volcanic mountain sunset',
    comment: 'The backdrop of the ancient volcanic hill with Shankaracharya temple during sunset is something you only see in paintings. Peaceful location, away from the loud traffic, with comfortable heated rooms.',
  },
];

export const FAQS = [
  {
    question: 'Where is Crescent Homestay located in Srinagar?',
    answer: 'Crescent Homestay is located at Dal Lake Srinagar, Pedestrian Mall Road, near Hotel Heaven Canal. It offers unhindered whole views of Dal Lake and the historic volcanic rock formation of Shankaracharya Hill.',
  },
  {
    question: 'What are the room tariffs and check-in/out policies?',
    answer: 'Our room tariffs range from ₹1,800 to ₹2,600 per night depending on room tier (Deluxe Lake View at ₹1,800, Superior Volcanic Hill View at ₹2,200, and Panoramic Royal Balcony Suite at ₹2,600). Standard check-in is 12:00 PM and check-out is 11:00 AM. Flexible check-in is accommodated subject to room availability.',
  },
  {
    question: 'Is high-speed Wi-Fi really free?',
    answer: 'Yes! High-speed optical fiber Wi-Fi (up to 100 Mbps) is 100% complimentary across all guest rooms, balconies, and dining terraces, making it perfect for remote work and leisure streaming.',
  },
  {
    question: 'How does the paid food service work?',
    answer: 'While welcome saffron Kahwa tea is complimentary, we offer freshly prepared home-cooked Kashmiri meals (Wazwan specials like Rogan Josh & Rista, Dal Lake Trout fish, vegetarian Dum Aloo, Nadru Yakhni, and daily breakfast) as a paid service at very reasonable rates. You can order à la carte or choose an all-inclusive daily meal plan during booking.',
  },
  {
    question: 'Can you arrange Maxi cabs and sightseeing taxis on short notice?',
    answer: 'Yes, we have our own fleet of well-maintained Maxi cabs (Innova, Tavera, and 12-seater Maxi Cabs) stationed on-site. We provide punctual airport transfers (35 mins) as well as full-day excursions to Gulmarg, Pahalgam, Sonamarg, Doodhpathri, and local Mughal gardens with trusted local drivers.',
  },
  {
    question: 'Is heating available during chilly months?',
    answer: 'All rooms are equipped with electric bed warmers/blankets, heavy Kashmiri quilts, 24/7 continuous hot water geysers, and room heaters/blowers to ensure you remain warmly comfortable even in sub-zero winter temperatures.',
  },
];
