import React from 'react';
import { Wifi, UtensilsCrossed, Car, Mountain, ChevronRight, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE, HOMESTAY_CONTACT } from '../data/homestayData';

interface HeroProps {
  onScrollToBooking: () => void;
  onScrollToTaxi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToBooking, onScrollToTaxi }) => {
  return (
    <section className="relative bg-stone-950 text-white overflow-hidden">
      {/* Background Image Container with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Dal Lake sunrise view with volcanic Shankaracharya hill and Crescent Homestay balcony"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Quiet Unboxed Metadata Kicker (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-300/90 tracking-wide">
            <span>Dal Lake, Pedestrian Mall Road</span>
            <span aria-hidden="true" className="text-amber-500/60">·</span>
            <span>Near Hotel Heaven Canal, Srinagar</span>
            <span aria-hidden="true" className="text-amber-500/60">·</span>
            <span className="font-semibold text-white">Tariffs from ₹1,800 to ₹2,600 / Night</span>
          </div>

          {/* Marquee Headline with Headline Containment & Balance */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display [text-wrap:balance]">
            Awaken Beside Dal Lake to Unbroken Mountain Panoramas
          </h1>

          {/* Direct Phone Number Contact Banner */}
          <div className="p-3 bg-amber-950/70 border border-amber-500/60 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>For Immediate Booking & Suite Inquiries Call / WhatsApp:</span>
              <a 
                href={`tel:${HOMESTAY_CONTACT.phone}`} 
                className="font-mono font-bold text-amber-300 hover:text-white underline text-sm tracking-wider"
              >
                {HOMESTAY_CONTACT.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${HOMESTAY_CONTACT.phone}`}
                className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded text-xs transition-colors whitespace-nowrap"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${HOMESTAY_CONTACT.whatsapp}?text=Hello!%20I%20want%20to%20book%20a%20suite%20at%20Crescent%20Homestay%20Srinagar.`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-xs transition-colors whitespace-nowrap"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Value Proposition Prose */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl">
            Welcome to <span className="text-white font-medium">Crescent Homestay</span>, your peaceful waterfront sanctuary in Srinagar on Pedestrian Mall Road near Hotel Heaven Canal. Enjoy unobstructed panoramic vistas across Dal Lake and the ancient volcanic Shankaracharya hill, with high-speed free Wi-Fi, home-cooked Kashmiri Wazwan dining, and on-site Maxi Cab taxis.
          </p>

          {/* Concrete Value Highlights (Unboxed text with subtle icons) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-stone-800/80 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Mountain className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Full Lake & Mountain View</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free High-Speed Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <UtensilsCrossed className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Home-Cooked Food Service</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Car className="w-4 h-4 text-amber-400 shrink-0" />
              <span>On-Site Maxi Cab Fleet</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onScrollToBooking}
              className="px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all rounded-md shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Check Room Rates & Book</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToTaxi}
              className="px-6 py-3.5 text-sm font-medium text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-700/80 transition-all rounded-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Car className="w-4 h-4 text-amber-400" />
              <span>View Maxi Cab Tours & Airport Fares</span>
            </button>
          </div>

          {/* Trust strip */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-stone-400">
            <span className="flex items-center gap-1.5 text-stone-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Direct Homestay Booking · Zero Middleman Fees
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Complimentary Welcome Saffron Kahwa
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
