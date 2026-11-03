import React, { useState, useEffect } from 'react';
import { X, Check, Wifi, BedDouble, Maximize2, Shield, Calendar, ArrowRight, Phone, ChevronLeft, ChevronRight, Bath, Sparkles } from 'lucide-react';
import { Room } from '../types/homestay';
import { HOMESTAY_CONTACT } from '../data/homestayData';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onSelectForBooking: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({
  room,
  onClose,
  onSelectForBooking,
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Reset active photo when room changes
  useEffect(() => {
    setActivePhotoIndex(0);
  }, [room?.id]);

  if (!room) return null;

  const galleryImages = [
    {
      url: room.image,
      caption: `${room.name} — Bedroom & Bedding`,
      type: 'Bedroom',
    },
    ...(room.bathroomImage ? [{
      url: room.bathroomImage,
      caption: `${room.name} — Attached Modern Bathroom (24/7 Hot Geyser & Western Commode)`,
      type: 'Attached Bathroom',
    }] : []),
    ...(room.images
      ? room.images.filter((img) => img !== room.image && img !== room.bathroomImage).map((img, i) => ({
          url: img,
          caption: `${room.name} — Additional Room & Bath View ${i + 1}`,
          type: 'Room Detail',
        }))
      : []),
  ];

  const currentPhoto = galleryImages[activePhotoIndex] || galleryImages[0];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-200 my-8">
        
        {/* Modal Header Image Gallery */}
        <div className="relative bg-stone-950 overflow-hidden">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-900">
            <img
              key={currentPhoto.url}
              src={currentPhoto.url}
              alt={currentPhoto.caption}
              className="w-full h-full object-cover transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Scrim at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/40 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Real Photograph Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 font-bold text-[11px] shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>100% Real Photo</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900/80 backdrop-blur-md text-amber-300 font-semibold text-[11px] border border-stone-700 shadow-md flex items-center gap-1">
                {currentPhoto.type === 'Attached Bathroom' ? (
                  <Bath className="w-3 h-3 text-cyan-300" />
                ) : (
                  <BedDouble className="w-3 h-3 text-amber-300" />
                )}
                <span>{currentPhoto.type}</span>
              </span>
            </div>

            {/* Prev & Next Photo Controls */}
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  aria-label="Previous photograph"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="Next photograph"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Title Overlay */}
            <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
              <div className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider">
                Photo {activePhotoIndex + 1} of {galleryImages.length}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white drop-shadow-sm">
                {currentPhoto.caption}
              </h3>
            </div>
          </div>

          {/* Interactive Thumbnails Bar */}
          {galleryImages.length > 1 && (
            <div className="bg-stone-900 p-2.5 border-t border-stone-800 flex items-center gap-2 overflow-x-auto">
              <span className="text-[11px] text-stone-400 font-medium px-2 shrink-0">Photos:</span>
              {galleryImages.map((img, idx) => {
                const isActive = idx === activePhotoIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      isActive ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105' : 'border-stone-700 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-16 h-12 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-stone-950/80 text-[9px] text-white text-center py-0.5 truncate px-1">
                      {img.type}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Key Stats Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200 text-center">
            <div>
              <div className="text-[11px] text-stone-500 uppercase">Tariff</div>
              <div className="text-base font-bold font-mono text-stone-900 tabular-nums">
                ₹{room.pricePerNight} <span className="text-[11px] font-normal text-stone-500">/ night</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500 uppercase">Capacity</div>
              <div className="text-sm font-semibold text-stone-900">
                Up to {room.maxGuests} Guests
              </div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500 uppercase">Room Size</div>
              <div className="text-sm font-semibold text-stone-900">
                {room.sizeSqFt} sq. ft.
              </div>
            </div>
          </div>

          {/* Description & View */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Room Overview & Perspective
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {room.summary}
            </p>
            <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200/60 text-xs text-amber-950">
              <span className="font-semibold">Window / Balcony Vantage:</span> {room.viewDescription}
            </div>
          </div>

          {/* Complete Amenities Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Included In-Room Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-stone-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-blue-700 font-medium">
                <Wifi className="w-3.5 h-3.5 shrink-0" />
                <span>Complimentary 100 Mbps Wi-Fi</span>
              </div>
            </div>
          </div>

          {/* Direct Phone Notice Before Booking */}
          <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-800" />
                <span>Before Booking, Contact Direct Phone:</span>
              </div>
              <a href={`tel:${HOMESTAY_CONTACT.phone}`} className="font-mono font-bold text-amber-900 text-sm tracking-wide hover:underline">
                {HOMESTAY_CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${HOMESTAY_CONTACT.phone}`}
                className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded font-semibold text-[11px] transition-colors"
              >
                Call
              </a>
              <a
                href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp}?text=Hello!%20I%20am%20inquiring%20about%20${encodeURIComponent(room.name)}%20at%20Crescent%20Homestay.`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded font-semibold text-[11px] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Homestay Policies */}
          <div className="text-[11px] text-stone-500 border-t border-stone-200 pt-3 space-y-1">
            <p>• Address: Dal Lake Srinagar, Pedestrian Mall Road, near Hotel Heaven Canal</p>
            <p>• Standard Check-in: 12:00 PM | Check-out: 11:00 AM</p>
            <p>• Authentic home-cooked Kashmiri food service (Rogan Josh ₹400, Yakhni ₹400, Dum Aloo ₹600, Kashmiri Thali ₹999, Kahwa ₹60, Noon Chai ₹60, Milk Tea ₹20)</p>
            <p>• On-site Maxi Cab taxi tours to Gulmarg, Pahalgam & Airport available</p>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-2 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-300 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectForBooking(room.id);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Calculate & Book This Room</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
