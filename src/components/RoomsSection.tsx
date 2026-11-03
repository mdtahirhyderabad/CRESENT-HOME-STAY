import React, { useState } from 'react';
import { Wifi, Eye, Check, Sparkles, ArrowRight, BedDouble, Maximize2, Phone, MessageSquare, Bath, Camera } from 'lucide-react';
import { ROOMS, HOMESTAY_CONTACT, ROOM_ROYAL_SUITE, ROOM_SUPERIOR, ROOM_DELUXE, BATHROOM_GEYSER, BATHROOM_SHOWER } from '../data/homestayData';
import { Room } from '../types/homestay';

interface RoomsSectionProps {
  onSelectRoomForBooking: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoomForBooking,
  onOpenRoomModal,
}) => {
  // Track active photo view per room: 'bedroom' | 'bathroom'
  const [activePhotoByRoom, setActivePhotoByRoom] = useState<Record<string, 'bedroom' | 'bathroom'>>({
    'deluxe-lake-view': 'bedroom',
    'superior-volcanic-view': 'bedroom',
    'panoramic-royal-suite': 'bedroom',
  });

  const toggleRoomPhoto = (roomId: string, view: 'bedroom' | 'bathroom') => {
    setActivePhotoByRoom((prev) => ({
      ...prev,
      [roomId]: view,
    }));
  };

  const REAL_PHOTOS = [
    {
      title: 'Deluxe Cedar Room',
      subtitle: '₹1,800/night · Solid wood bed & warm quilt',
      image: ROOM_DELUXE,
      category: 'Deluxe Bedroom',
      roomId: 'deluxe-lake-view',
    },
    {
      title: 'Superior Volcanic Hill Room',
      subtitle: '₹2,200/night · Double-curtain mountain view',
      image: ROOM_SUPERIOR,
      category: 'Superior Bedroom',
      roomId: 'superior-volcanic-view',
    },
    {
      title: 'Royal Balcony Suite',
      subtitle: '₹2,600/night · Damask walls & cushioned headboard',
      image: ROOM_ROYAL_SUITE,
      category: 'Royal Suite',
      roomId: 'panoramic-royal-suite',
    },
    {
      title: 'Modern En-Suite Bathroom',
      subtitle: '24/7 Hot Water Polo Geyser, Pedestal Washbasin & Western Toilet',
      image: BATHROOM_GEYSER,
      category: 'Attached Bath (Geyser)',
      roomId: 'superior-volcanic-view',
    },
    {
      title: 'Attached Shower & Restroom',
      subtitle: 'Hot & Cold Shower, Marble Wall Accents & Carved Wooden Door',
      image: BATHROOM_SHOWER,
      category: 'En-Suite Shower',
      roomId: 'deluxe-lake-view',
    },
  ];

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Accommodations & Tariffs · Authentic Photos</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display [text-wrap:balance]">
            Cozy Mountain & Volcanic Hill Rooms from ₹1,800 to ₹2,600
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Every room at Crescent Homestay features hand-carved Kashmiri woodwork, cozy electric blankets, 24/7 hot water, high-speed free Wi-Fi, and scenic views of the ancient volcanic Shankaracharya hill.
          </p>
        </div>

        {/* Direct Contact Phone Banner Before Contacting or Booking */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-900 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                Direct Host Contact Number Before Booking
              </div>
              <p className="text-xs text-amber-900">
                Contact us directly at <a href={`tel:${HOMESTAY_CONTACT.phone}`} className="font-bold underline text-stone-950">{HOMESTAY_CONTACT.phone}</a> for instant room availability, balcony suites, and food service inquiries.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${HOMESTAY_CONTACT.phone}`}
              className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {HOMESTAY_CONTACT.phone}</span>
            </a>
            <a
              href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp}?text=Hello%20Crescent%20Homestay!%20I%20am%20interested%20in%20booking%20a%20suite/room.`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ROOMS.map((room) => {
            const currentView = activePhotoByRoom[room.id] || 'bedroom';
            const displayImg = currentView === 'bathroom' && room.bathroomImage ? room.bathroomImage : room.image;

            return (
              <div
                key={room.id}
                className={`flex flex-col bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  room.featured
                    ? 'border-amber-400 ring-1 ring-amber-400 shadow-md'
                    : 'border-stone-200 hover:border-stone-300 shadow-sm'
                }`}
              >
                {/* Room Image Container */}
                <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden group">
                  <img
                    key={displayImg}
                    src={displayImg}
                    alt={`${room.name} - ${currentView === 'bathroom' ? 'Attached Bathroom' : 'Bedroom'}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Fallback scrim */}
                  <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    {room.featured ? (
                      <div className="bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded shadow-sm flex items-center gap-1 pointer-events-auto">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Most Popular Choice</span>
                      </div>
                    ) : (
                      <div className="bg-stone-900/80 text-amber-300 font-semibold text-[11px] px-2 py-0.5 rounded shadow-sm backdrop-blur-sm pointer-events-auto">
                        Crescent Homestay
                      </div>
                    )}

                    <div className="bg-stone-950/80 text-white font-medium text-[10px] px-2 py-0.5 rounded shadow-sm backdrop-blur-sm flex items-center gap-1 pointer-events-auto">
                      <Camera className="w-3 h-3 text-amber-400" />
                      <span>Real Photo</span>
                    </div>
                  </div>

                  {/* Interactive Bedroom / Bathroom Photo Switcher Pills */}
                  {room.bathroomImage && (
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-stone-950/80 backdrop-blur-md p-1 rounded-lg border border-stone-800 shadow-lg">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRoomPhoto(room.id, 'bedroom');
                        }}
                        className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                          currentView === 'bedroom'
                            ? 'bg-amber-400 text-stone-950 shadow-sm'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        <BedDouble className="w-3 h-3" />
                        <span>Bedroom</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRoomPhoto(room.id, 'bathroom');
                        }}
                        className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                          currentView === 'bathroom'
                            ? 'bg-cyan-500 text-stone-950 shadow-sm'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        <Bath className="w-3 h-3" />
                        <span>Attached Bath</span>
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => onOpenRoomModal(room)}
                    aria-label={`View full details of ${room.name}`}
                    className="absolute bottom-3 right-3 z-10 bg-stone-900/80 hover:bg-stone-900 text-white text-xs px-2.5 py-1.5 rounded backdrop-blur-sm transition-colors flex items-center gap-1.5 shadow cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View All Photos</span>
                  </button>
                </div>

                {/* Room Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-Pill Discipline) */}
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-stone-400" />
                        {room.bedType}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-stone-400" />
                        {room.sizeSqFt} sq.ft
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-stone-900">
                      {room.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {room.summary}
                    </p>

                    <div className="mt-3 p-2.5 bg-stone-50 rounded-lg border border-stone-200/80 text-xs text-stone-700">
                      <span className="font-semibold text-stone-900">View:</span> {room.viewDescription}
                    </div>

                    {/* Key Amenities */}
                    <div className="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
                      <div className="text-xs font-semibold text-stone-800">Included In Room:</div>
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 text-xs font-medium text-blue-700">
                        <Wifi className="w-3.5 h-3.5 shrink-0" />
                        <span>Free High-Speed Wi-Fi Included</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action Strip */}
                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-stone-500 font-medium">Nightly Tariff</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold font-mono tabular-nums text-stone-900">
                          ₹{room.pricePerNight.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-stone-500">/ night</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectRoomForBooking(room.id)}
                      className="px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-md shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <span>Book Room</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Real Photographs Gallery Strip */}
        <div className="mt-14 pt-10 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Verified Visuals</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                Real Photographs of Crescent Homestay Rooms & Bathrooms
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Authentic, unfiltered photographs of our bedrooms and attached modern bathrooms with 24/7 hot water geysers.
              </p>
            </div>
            <div className="shrink-0">
              <span className="text-xs font-medium text-stone-500 bg-stone-200/70 px-3 py-1 rounded-full">
                All 5 Photos Verified
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {REAL_PHOTOS.map((photo, idx) => {
              const matchedRoom = ROOMS.find((r) => r.id === photo.roomId) || ROOMS[0];
              return (
                <div
                  key={idx}
                  onClick={() => onOpenRoomModal(matchedRoom)}
                  className="group relative bg-stone-900 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all border border-stone-200 hover:border-amber-400 flex flex-col"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-800">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    <span className="absolute top-2 left-2 bg-stone-900/80 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                      {photo.category}
                    </span>
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <div className="text-xs font-bold leading-tight drop-shadow-sm">{photo.title}</div>
                      <div className="text-[10px] text-stone-300 line-clamp-1 mt-0.5">{photo.subtitle}</div>
                    </div>
                  </div>
                  <div className="p-2 bg-stone-900 text-center">
                    <span className="text-[10px] text-amber-400 group-hover:text-amber-300 font-medium flex items-center justify-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>Inspect Room</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparency note */}
        <div className="mt-8 text-center text-xs text-stone-500">
          All room tariffs include complimentary welcome Kahwa tea, free 100 Mbps Wi-Fi, electric heating, and 24/7 hot geyser water. Paid food service and maxi cab taxi tours can be added seamlessly.
        </div>

      </div>
    </section>
  );
};
